import React from 'react'
import { Border } from '../../components/border/border';
import contacts_bg from '../../assets/jpg/contacts_bg.jpg';
import s from './contactsPage.module.scss';

export const ContactsPage: React.FC = () => {
  return (
    <section className={s.contacts} id={`contacts`} style={{ backgroundImage: `url(${contacts_bg})` }}>
      <Border string={'Контакты'} />
      <div className={s.contacts__whait_wrapp}>
        <div className={s.contacts__whait}>
          <p className={s.contacts__whait_text}>
            Буду ждать ваших писем,
            искренне ваш Имя Фамилия.
          </p>
        </div>
      </div>
      <div className={s.contacts__form_wrapp}>
        <form className={s.contacts__form}>
          <h4 className={s.contacts__form_title}>Обратная связь</h4>
          <p className={s.contacts__form_text}>Я обязательно прочту ваше писмо в течение двух дней.</p>
          <div className={s.contacts__form_inputs}>
            <input className={s.contacts__form_input} placeholder='Имя' type="text" />
            <input className={s.contacts__form_input} placeholder='Фамиля' type="text" />
          </div>
          <textarea className={s.contacts__form_textarea} placeholder="Напишите мне"></textarea>
          <button className={s.contacts__form_btn}>Отправить</button>
        </form>
      </div>
    </section>
  )
}
