import * as React from 'react';
import s from './admin.module.scss';
import { Menu } from '../../components/adminMenu/menu';
import { MainPage } from '../../components/adminMainPage/mainPage';
import { MyInfo } from '../../components/adminMyInfo/myInfo';
import AddPoem from '../../components/adminAdd/poem';
import AddArticle from '../../components/adminAdd/article';
import ModifyPoem from '../../components/adminDeleteEdit/poem';
import ModifyArticle from '../../components/adminDeleteEdit/article';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { contentSlice } from '../../redux/slices/contentSlice';
import { selectContentData } from '../../redux/selectors';
// import { saveContent } from "../../redux/slices/contentSlice";



export const AdminPage: React.FC = () => {
    const dispatch = useCustomDispatch();
    const [component, setComponent] = React.useState<string>('');
    const [newContetnt, setNewContent] = React.useState<any>({ keq: 'arg' });

    const contentState = useCustomSelector<any>(selectContentData);
    const content = contentState.isLoading === `loaded` ? contentState.data?.content : [];


    const menuId = (value: string) => {
        setComponent(value)
    }

    const updateContent = () => {
        console.log({ ...content, ...newContetnt })
        // dispatch(contentSlice.actions.saveContent())
    }

    const deleteChange = () => {

    }

    const ChildComponent = (name: string) => {
        switch (name) {
            case 'Личная информация':
                return (
                    <MyInfo />
                )
            case 'Главная страница':
                return (
                    <MainPage contentState={contentState} newContetnt={newContetnt}/>
                )
            case 'Добавить стих':
                return (
                    <AddPoem />
                )
            case 'Добавить статью':
                return (
                    <AddArticle />
                )
            case 'Изменить или удалить стих':
                return (
                    <ModifyPoem />
                )
            case 'Изменить или удалить статью':
                return (
                    <ModifyArticle />
                )
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
                        <h3 className={s.adminPage__title}>Главная страница</h3>
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

