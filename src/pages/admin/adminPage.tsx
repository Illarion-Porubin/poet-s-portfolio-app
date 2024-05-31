import React, { memo } from 'react';
import s from './admin.module.scss';
import { Menu } from '../../components/adminMenu/menu';
import { Content } from '../../components/adminContent/content';
import { MyInfo } from '../../components/adminMyInfo/myInfo';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectAuthData, selectContentData } from '../../redux/selectors';
import { fetchGetContetn, fetchUpdateContent } from '../../redux/slices/contentSlice';
import { Navigate } from 'react-router-dom';
import { AddData } from '../../components/adminAdd/addData';
import { ChangeData } from '../../components/adminDeleteEdit/changeData';
import { fetchPostPoem, fetchUpdatePoem } from '../../redux/slices/poemSlice';
import { fetchPostArticle, fetchUpdateArticle } from '../../redux/slices/articleSlice';
// import { fetchAuthMe, fetchUpdateInfo } from '../../redux/slices/authSlice';
import { ContentT } from '../../types/types';


export const AdminPage: React.FC = memo(() => {
    const dispatch = useCustomDispatch();
    const auth = useCustomSelector(selectAuthData);
    const contentState = useCustomSelector(selectContentData);
    const [component, setComponent] = React.useState<string>('Личная информация');
    const [data, setData] = React.useState<ContentT | null>(null);
    const articleId = React.useRef<string>('');
    const poemId = React.useRef<string>('');


    const menuId = (value: string) => setComponent(value);

    React.useEffect(() => {
        dispatch(fetchGetContetn());
    }, [dispatch]);

    const addId = (id: string | null | undefined, component: string) => {
        if (component === 'Изменить, удалить стих') {
            // setComponent('Добавить стих')
            poemId.current = id ? id : ''
        } else {
            // setComponent('Добавить статью')
            articleId.current = id ? id : ''
        }
    }

    const updateContent = React.useCallback(() => {
        if (contentState.isLoading === `loaded`)
            switch (component) {
                case 'Личная информация':
                    dispatch(fetchUpdateContent({...data!}))  
                    setData(null)
                    setTimeout(() => dispatch(fetchGetContetn()), 200);
                    break
                case 'Основной контент':
                    dispatch(fetchUpdateContent({...contentState.data!}))
                    setData(null)
                    setTimeout(() => dispatch(fetchGetContetn()), 200);
                    break
                case 'Добавить стих':
                    if (data?.id) {
                        const updateArticle = async () => {
                            const article = await dispatch(fetchUpdateArticle({...data }))
                            if(article.meta.requestStatus){
                             setData(null)
                             setTimeout(() => dispatch(fetchGetContetn()), 200);
                            }
                         } 
                         updateArticle()   
                        // dispatch(fetchUpdateArticle({...data }))
                        // setTimeout(() =>  window.location.reload(), 200);
                    }
                    else {
                        const postArticle = async () => {
                           const article = await dispatch(fetchPostArticle({...data }))
                           if(article.meta.requestStatus){
                            setData(null)
                            setTimeout(() => dispatch(fetchGetContetn()), 200);
                           }
                        } 
                        postArticle()         
                    }
                    break
                case 'Добавить статью':
                    if (data?.id) {
                        console.log(data, 3);
                        // dispatch(fetchUpdateArticle({_id: data?.id, text: data?.text, title: data?.title }))
                        // dispatch(fetchUpdateArticle({...data }))
                        // setTimeout(() =>  window.location.reload(), 200);
                    }
                    else {
                        if (data) {
                            console.log(data, 4);
                            // dispatch(fetchUpdateArticle({...data }))
                            // setTimeout(() =>  window.location.reload(), 200);
                        }
                    }
                    break
                default:
                    return (
                        null
                    );
            }
    }, [dispatch, data, component, contentState.data, contentState.isLoading])

    if (auth.isLoading === 'error' && auth.data?.accessToken === undefined) {
        return (<Navigate to='/' />)
    }

    const ChildComponent = (name: string) => {
        switch (name) {
            case 'Личная информация':
                return <MyInfo setData={setData}/>
            case 'Основной контент':
                return <Content />
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
                    <MyInfo setData={setData}/>
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
                            <button className={s.adminPage__action_btn} onClick={() => window.location.reload()}>Отмена</button>
                        </div>
                    </div>
                    <div className={s.adminPage__container} >{ChildComponent(component)}</div>
                </div>
            </section>
        </>
    );
})

