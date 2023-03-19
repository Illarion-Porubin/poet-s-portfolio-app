import React from 'react';
import s from "./about.module.scss";
import { Border } from '../../components/border/border';
import about_bg from "../../assets/jpg/about_bg.jpg";
import avatar from "../../assets/png/avatar.png";

export default function About() {
    return (
        <section className={s.about} style={{ backgroundImage: `url(${about_bg})` }}>
            <Border string='обо мне' />
            <div className={s.about__wrapp}>
                <div className={s.about__avatar_wrapp}>
                    <img className={s.about__avatar} src={avatar} alt="avatar" />
                </div>
                <div className={s.about__biography}>
                    <h3 className={s.about__title}>Краткая биография</h3>
                    <p className={s.about__text}>
                        В частности, курс на социально-ориентированный национальный проект не даёт нам иного выбора, кроме определения первоочередных требований. Не следует, однако, забывать, что сложившаяся структура организации говорит о возможностях своевременного выполнения сверхзадачи. Безусловно, постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обусловливает важность соответствующих условий активизации.
                    </p>
                </div>
            </div>
        </section>
    )
}
