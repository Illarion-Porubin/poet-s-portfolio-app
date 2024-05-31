import React, { memo } from 'react';
import s from "./about.module.scss";
import { Border } from '../../components/border/border';
import about_bg from "../../assets/jpg/about_bg.jpg";
import { useCustomSelector } from '../../hooks/store';
import { selectContentData } from '../../redux/selectors';
// import { UploadWidget } from '../../components/Upload/UploadWidget';



export const AboutPage: React.FC = memo(() => {
    const contentState = useCustomSelector(selectContentData);

    return (
        <>
            <section id='about' className={s.about} style={{ backgroundImage: `url(${about_bg})` }}>
                <Border string='обо мне' />
                <div className={s.about__wrapp}>
                    <div className={s.about__avatar_wrapp}>
                        <div className={s.about__avatar}>
                            {/* <UploadWidget requestFrom={''} /> */}
                        </div>
                        <div className={s.about__bg_avatar}>
                            {/* <UploadWidget requestFrom={''} /> */}
                        </div>
                    </div>
                    <div className={s.about__biography}>
                        <p className={s.about__title}>
                            {contentState.data?.about_block_title_1 || 'здесь должен быть текст, но что-то пошло не так'}
                        </p>
                        <p className={s.about__text}>
                            {contentState.data?.about_block_text_1 || 'здесь должен быть текст, но что-то пошло не так'}
                        </p>
                    </div>
                </div>
                <div className={s.about__whay_wrapp}>
                    <div className={s.about__whay}>
                        <p className={s.about__whay_title}>
                            {contentState.data?.about_block_title_2 || 'здесь должен быть текст, но что-то пошло не так'}
                        </p>
                        <p className={s.about__whay_text}>
                            {contentState.data?.about_block_text_2 || 'здесь должен быть текст, но что-то пошло не так'}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
})
