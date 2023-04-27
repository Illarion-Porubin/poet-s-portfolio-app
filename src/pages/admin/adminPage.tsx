import * as React from 'react';
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
import { fetchGetPoems, fetchPostPoem } from '../../redux/slices/poemSlice';
import { fetchGetArticles, fetchPostArticle } from '../../redux/slices/articleSlice';



export const AdminPage: React.FC = () => {
    const dispatch = useCustomDispatch();
    const [component, setComponent] = React.useState<string>('');
    const [data, setData] = React.useState<any>({});
    const auth = useCustomSelector(selectAuthData);
    const contentState = useCustomSelector(selectContentData);


    const menuId = (value: string) => {
        setComponent(value)
    }

    console.log(contentState)

    const updateContent = React.useCallback(() => {
        const content = contentState.isLoading === `loaded` ? contentState.data?.content : [];
        switch (component) {
            case 'Главная страница':
                dispatch(fetchUpdateContent({ ...content, ...contentState.newData }))
                setTimeout(() => {
                    dispatch(fetchGetContetn())
                }, 200);
                break
            case 'Добавить стих':
                dispatch(fetchPostPoem(data))
                setTimeout(() => {
                    dispatch(fetchGetPoems())
                }, 200);
                break
            case 'Добавить статью':
                dispatch(fetchPostArticle(data))
                setTimeout(() => {
                    dispatch(fetchGetArticles())
                }, 200);
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
                return <MyInfo />
            case 'Главная страница':
                return <MainPage contentState={contentState} />
            case 'Добавить стих':
                return <AddData setData={setData} />
            case 'Добавить статью':
                return <AddData setData={setData} />
            case 'Изменить, удалить стих':
                return <ChangeData componentName={component} />
            case 'Изменить, удалить статью':
                return <ChangeData componentName={component} />
            default:
                return (
                    <MyInfo />
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
                            <button className={s.adminPage__action_btn} onClick={updateContent}>Сохронить</button>
                            <button className={s.adminPage__action_btn} onClick={deleteChange}>Отмена</button>
                        </div>
                    </div>
                    <div className={s.adminPage__container} >{ChildComponent(component)}</div>
                </div>
            </section>
        </>
    );
}

