import React, { memo } from 'react';
import s from './admin.module.scss';
import { Menu } from '../../components/adminMenu/menu';
import { Content } from '../../components/adminContent/content';
import { MyInfo } from '../../components/adminMyInfo/myInfo';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectArticleData, selectAuthData, selectContentData, selectPoemData } from '../../redux/selectors';
import { contentSlice, fetchGetContetn, fetchUpdateContent } from '../../redux/slices/contentSlice';
import { Navigate } from 'react-router-dom';
import { AddCreativity } from '../../components/adminAdd/AddCreativity';
import { ChangeData } from '../../components/adminDeleteEdit/changeData';
import { fetchGetPoems, fetchPostPoem, fetchUpdatePoem, poemSlice } from '../../redux/slices/poemSlice';
import { articleSlice, fetchGetArticles, fetchPostArticle, fetchUpdateArticle } from '../../redux/slices/articleSlice';
// import { fetchAuthMe, fetchUpdateInfo } from '../../redux/slices/authSlice';


export const AdminPage: React.FC = memo(() => {
    const dispatch = useCustomDispatch();
    const authState = useCustomSelector(selectAuthData);
    const poemState = useCustomSelector(selectPoemData);
    const contentState = useCustomSelector(selectContentData);
    const articleState = useCustomSelector(selectArticleData);
 

    React.useEffect(() => {
        dispatch(fetchGetArticles());
        dispatch(fetchGetContetn());
        dispatch(fetchGetPoems());
    }, [dispatch]);


    const updateContent = () => {
        switch (contentState.category) {
            case 'Личная информация':
                dispatch(fetchUpdateContent({...contentState.newData!}))
                if(contentState.isLoading === "loaded"){
                    setTimeout(() => {
                        dispatch(contentSlice.actions.saveContent(contentState.newData))
                    }, 200);
                }
                else  window.alert("Ошибка сохранения данных")
                break
            case 'Основной контент':
                dispatch(fetchUpdateContent({...contentState.newData!}))
                if(contentState.isLoading === "loaded"){
                    setTimeout(() => {
                        dispatch(contentSlice.actions.saveContent(contentState.newData))
                    }, 200);
                }
                else  window.alert("Ошибка сохранения данных")
                break
            case 'Добавить стих':
                if (poemState.poem?._id) {
                    dispatch(fetchUpdatePoem({...poemState.poem}))
                    dispatch(poemSlice.actions.setPoem(null))
                    if(poemState.isLoading === "error") window.alert("Ошибка сохранения данных") 
                }
                else {
                    dispatch(fetchPostPoem({...poemState.poem!}))  
                    dispatch(poemSlice.actions.setPoem(null))       
                    if(poemState.isLoading === "error") window.alert("Ошибка сохранения данных") 
                }
                break
            case 'Добавить статью':
                if (articleState.article?._id) {
                    dispatch(fetchUpdateArticle({...articleState.article}))
                    dispatch(articleSlice.actions.setArticle(null))
                    if(poemState.isLoading === "error") window.alert("Ошибка сохранения данных") 
                }
                else {
                    dispatch(fetchPostArticle({...articleState.article!}))    
                    dispatch(articleSlice.actions.setArticle(null))
                    if(poemState.isLoading === "error") window.alert("Ошибка сохранения данных") 
                }
                break
            default:
                return null
        }
    }

    if (authState.isLoading === 'error' && authState.data?.accessToken === undefined) {
        return (<Navigate to='/' />)
    }

    const ChildComponent = (name: string) => {
        switch (name) {
            case 'Личная информация':
                return <MyInfo/>
            case 'Основной контент':
                return <Content />
            case 'Добавить стих':
                return <AddCreativity />
            case 'Добавить статью':
                return <AddCreativity />
            case 'Изменить, удалить стих':
                return <ChangeData/>
            case 'Изменить, удалить статью':
                return <ChangeData/>
            default:
                return (
                    <MyInfo/>
                );
        }
    }

    return (
        <>
            <section className={s.adminPage}>
                <Menu />
                <div className={s.adminPage__content}>
                    <div className={s.adminPage__header}>
                        <h3 className={s.adminPage__title}>{contentState.category}</h3>
                        <div className={s.adminPage__action}>
                            <button className={s.adminPage__action_btn} onClick={updateContent}>Сохранить</button>
                            <button className={s.adminPage__action_btn} onClick={() => window.location.reload()}>Отмена</button>
                        </div>
                    </div>
                    <div className={s.adminPage__container} >{ChildComponent(contentState.category)}</div>
                </div>
            </section>
        </>
    );
})

