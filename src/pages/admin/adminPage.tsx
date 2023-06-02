import React, { memo } from 'react';
import s from './admin.module.scss';
import { Menu } from '../../components/adminMenu/menu';
import { MainPage } from '../../components/adminMainPage/mainPage';
import { MyInfo } from '../../components/adminMyInfo/myInfo';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectAuthData, selectContentData } from '../../redux/selectors';
import { fetchGetContetn, fetchUpdateContent } from '../../redux/slices/contentSlice';
import { Navigate } from 'react-router-dom';
import { AddData } from '../../components/adminAdd/addData';
import { ChangeData } from '../../components/adminDeleteEdit/changeData';
import { fetchPostPoem, fetchUpdatePoem } from '../../redux/slices/poemSlice';
import { fetchPostArticle, fetchUpdateArticle } from '../../redux/slices/articleSlice';
import { fetchUpdateInfo } from '../../redux/slices/authSlice';
import { Creativity, ComonTypes, AdminTypes } from '../../types/types';




export const AdminPage: React.FC = memo(() => {
    const dispatch = useCustomDispatch();
    const auth = useCustomSelector(selectAuthData);
    const contentState = useCustomSelector(selectContentData);
    const [component, setComponent] = React.useState<string>('Личная информация');
    const [data, setData] = React.useState<ComonTypes | null>(null);
    const articleId = React.useRef<string>('');
    const poemId = React.useRef<string>('');

    const menuId = (value: string) => {
        setComponent(value)
    }

    const addId = (id: string | null | undefined, component: string) => {
        if (component === 'Изменить, удалить стих') {
            setComponent('Добавить стих')
            poemId.current = id ? id : ''
        } else {
            setComponent('Добавить статью')
            articleId.current = id ? id : ''
        }
    }

    const updateContent = React.useCallback(() => {
        if (contentState.isLoading === `loaded`)
            switch (component) {
                case 'Личная информация':
                    const newData: AdminTypes = {
                        firstName: data?.firstName,
                        lastName: data?.lastName,
                        email: data?.email,
                        id: data?.id,
                    }
                    dispatch(fetchUpdateInfo({ ...newData }))
                    dispatch(fetchUpdateContent({
                        ...contentState.data?.content,
                        main_email: data?.email,
                        main_firstName: data?.firstName,
                        main_lastName: data?.lastName
                    }))
                    setTimeout(() => {
                        dispatch(fetchGetContetn())
                    }, 200);
                    break
                case 'Главная страница':
                    dispatch(fetchUpdateContent({ ...contentState.data?.content, ...contentState.newData }))
                    setTimeout(() => {
                        dispatch(fetchGetContetn())
                    }, 200);
                    break
                case 'Добавить стих':
                    if (data?.id) {
                        dispatch(fetchUpdatePoem({_id: data?.id, text: data?.text, title: data?.title }))
                        setTimeout(() => {
                            window.location.reload()
                        }, 200);
                    }
                    else {
                        dispatch(fetchPostPoem({_id: data?.id, text: data?.text, title: data?.title }))
                        setTimeout(() => {
                            window.location.reload()
                        }, 200);
                    }
                    break
                case 'Добавить статью':
                    if (data?.id) {
                        dispatch(fetchUpdateArticle({_id: data?.id, text: data?.text, title: data?.title }))
                        setTimeout(() => {
                            window.location.reload()
                        }, 200);
                    }
                    else {
                        if (data) {
                            dispatch(fetchPostArticle({_id: data?.id, text: data?.text, title: data?.title }))
                            setTimeout(() => {
                                window.location.reload()
                            }, 200);
                        }
                    }
                    break
                default:
                    return (
                        null
                    );
            }
    }, [dispatch, data, component, contentState.newData, contentState.data?.content, contentState.isLoading])

    const deleteChange = () => {
        window.location.reload()
    }

    if (auth.isLoading === 'error' && auth.data?.accessToken === undefined) {
        return (<Navigate to='/' />)
    }

    const ChildComponent = (name: string) => {
        switch (name) {
            case 'Личная информация':
                return <MyInfo setData={setData} />
            case 'Главная страница':
                return <MainPage contentState={contentState} />
            case 'Добавить стих':
                return <AddData id={poemId.current} setData={setData} componentName={component} />
            case 'Добавить статью':
                return <AddData id={articleId.current} setData={setData} componentName={component} />
            case 'Изменить, удалить стих':
                return <ChangeData updateData={addId} componentName={component} />
            case 'Изменить, удалить статью':
                return <ChangeData updateData={addId} componentName={component} />
            default:
                return (
                    <MyInfo setData={setData} />
                );
        }
    }

    return (
        <>
            <section className={s.adminPage}>
                <Menu menuId={menuId} />
                <div className={s.adminPage__content}>
                    <div className={s.adminPage__header}>
                        <h3 className={s.adminPage__title}>{component}</h3>
                        <div className={s.adminPage__action}>
                            <button className={s.adminPage__action_btn} onClick={updateContent}>Сохранить</button>
                            <button className={s.adminPage__action_btn} onClick={deleteChange}>Отмена</button>
                        </div>
                    </div>
                    <div className={s.adminPage__container} >{ChildComponent(component)}</div>
                </div>
            </section>
        </>
    );
})

