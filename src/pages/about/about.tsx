import React from 'react';
import s from "./about.module.scss";
import { Border } from '../../components/border/border';
import about_bg from "../../assets/jpg/about_bg.jpg";
import avatar from "../../assets/png/avatar.png";

export const AboutPage: React.FC = () => {
    return (
        <section id='about' className={s.about} style={{ backgroundImage: `url(${about_bg})` }}>
            <Border string='обо мне' />
            <div className='container'>
                <div className={s.about__wrapp}>
                    <div className={s.about__avatar_wrapp}>
                        <img className={s.about__bg_avatar} src={avatar} alt="avatar" />
                        <img className={s.about__avatar} src={avatar} alt="avatar" />
                    </div>
                    <div className={s.about__biography}>
                        <p className={s.about__title}>Краткая биография</p>
                        <p className={s.about__text}>
                            В частности, курс на социально-ориентированный национальный проект не даёт нам иного выбора, кроме определения первоочередных требований. Не следует, однако, забывать, что сложившаяся структура организации говорит о возможностях своевременного выполнения сверхзадачи. Безусловно, постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обусловливает важность соответствующих условий активизации.
                        </p>
                    </div>
                </div>
                <div className={s.about__whay_wrapp}>
                    <div className={s.about__whay}>
                        <p className={s.about__whay_title}>Почему я пишу стихи</p>
                        <p className={s.about__whay_text}>
                            В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы по формированию позиции требует анализа системы массового участия. Приятно, граждане, наблюдать, как интерактивные прототипы призывают нас к новым свершениям, которые, в свою очередь, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Равным образом, глубокий уровень погружения играет определяющее значение для экономической целесообразности принимаемых решений.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
