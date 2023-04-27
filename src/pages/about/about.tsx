import React from 'react';
import s from "./about.module.scss";
import { Border } from '../../components/border/border';
import about_bg from "../../assets/jpg/about_bg.jpg";
import avatar from "../../assets/png/avatar.png";
import { MainPageContetn } from '../../types/types';
import { useCustomSelector } from '../../hooks/store';
import { selectContentData } from '../../redux/selectors';



export const AboutPage: React.FC = () => {
    const contentState = useCustomSelector<any>(selectContentData)
    const content = contentState.isLoading === `loaded` ? contentState.data?.content : []

    return (
        <>
            <section id='about' className={s.about} style={{ backgroundImage: `url(${about_bg})` }}>
                <Border string='обо мне' />
                <div className={s.about__wrapp}>
                    <div className={s.about__avatar_wrapp}>
                        <img className={s.about__avatar} src={avatar} alt="avatar" />
                        <img className={s.about__bg_avatar} src={avatar} alt="avatar" />
                    </div>
                    <div className={s.about__biography}>
                        <p className={s.about__title}>
                            {content.about_block_title_1 || 'здесь должен быть текст, но что-то пошло не так'}
                        </p>
                        <p className={s.about__text}>
                            {content.about_block_text_1 || 'здесь должен быть текст, но что-то пошло не так'}
                        </p>
                    </div>
                </div>
                <div className={s.about__whay_wrapp}>
                    <div className={s.about__whay}>
                        <p className={s.about__whay_title}>
                            {content.about_block_title_2 || 'здесь должен быть текст, но что-то пошло не так'}
                        </p>
                        <p className={s.about__whay_text}>
                            {content.about_block_text_2 || 'здесь должен быть текст, но что-то пошло не так'}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
