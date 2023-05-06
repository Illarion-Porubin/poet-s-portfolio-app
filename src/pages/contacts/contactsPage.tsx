import React from 'react'
import { Border } from '../../components/border/border';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectContentData } from '../../redux/selectors';
import { fetchSendMaeesage } from '../../redux/slices/contentSlice';
import contacts_bg from '../../assets/jpg/contacts_bg.jpg';
import s from './contactsPage.module.scss';

export const ContactsPage: React.FC = () => {
  const dispatch = useCustomDispatch();
  const contentState = useCustomSelector<any>(selectContentData);
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [text, setText] = React.useState<string>('');
  const content = contentState.isLoading === `loaded` ? contentState.data?.content : []

  const sendEmail = (e: any) => {
    const data = { name, email, text, to: contentState.data?.content?.email ? contentState.data?.content?.email : `vladimiraroyan.base@gmail.com` }
    dispatch(fetchSendMaeesage({ ...data }))
  }


  return (
    <section className={s.contacts} id={`contacts`} style={{ backgroundImage: `url(${contacts_bg})` }}>
      <Border string={'Контакты'} />
      <div className={s.contacts__whait_wrapp}>
        <div className={s.contacts__whait}>
          <p className={s.contacts__whait_text}>
            {content.contact_title || 'здесь должен быть текст, но что-то пошло не так'}
          </p>
        </div>
      </div>
      <div className={s.contacts__form_wrapp}>
        <form className={s.contacts__form}
          onSubmit={(e) => sendEmail(e)}
        >
          <h4 className={s.contacts__form_title}>Обратная связь</h4>
          <p className={s.contacts__form_text}>Я обязательно прочту ваше писмо в течение двух дней.</p>
          <div className={s.contacts__form_inputs}>
            <input
              className={s.contacts__form_input}
              placeholder='Имя'
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className={s.contacts__form_input}
              placeholder='Почта'
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <textarea
            className={s.contacts__form_textarea}
            placeholder="Напишите мне"
            onChange={e => setText(e.target.value)}
            value={text}
          />
          <button className={s.contacts__form_btn}>Отправить</button>
        </form>
      </div>
    </section>
  )
}
