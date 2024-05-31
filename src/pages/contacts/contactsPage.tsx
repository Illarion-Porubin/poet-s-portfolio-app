import React, { memo } from 'react';
import { Border } from '../../components/border/border';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectContentData } from '../../redux/selectors';
import { fetchSendMaeesage } from '../../redux/slices/contentSlice';
import contacts_bg from '../../assets/jpg/contacts_bg.jpg';
import s from './contactsPage.module.scss';

export const ContactsPage: React.FC = memo(() => {
  const dispatch = useCustomDispatch();
  const contentState = useCustomSelector(selectContentData);
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [text, setText] = React.useState<string>('');
  const [message, setMessage] = React.useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email && text) {
      const data = { name, email, text, to: contentState.data?.email ? contentState.data?.email : `vladimiraroyan.base@gmail.com` }
      dispatch(fetchSendMaeesage({ ...data }))
      setName('')
      setEmail('')
      setText('')
      setMessage(true)
      setTimeout(() => {
        setMessage(null)
      }, 3000);
    }
    else {
      setMessage(false)
      setTimeout(() => {
        setMessage(null)
      }, 3000);
    }
  }


  const popup = () => {
    if (message) {
      return (
        <>
          <div className={s.message}>
            <div className={s.message__content_true}>
              <p className={s.message__text}>Ваше сообщение успешно отправленно</p>
            </div>
          </div>
        </>
      )
    }
    else if (message === false) {
      return (
        <>
          <div className={s.message}>
            <div className={s.message__content_false}>
              <p className={s.message__text}>Форма не длжна содержать пустые поля</p>
            </div>
          </div>
        </>
      )
    }
    else if(message === null) {
      return null
    }
  }


  return (
    <>
      {
        popup()
      }
      <section className={s.contacts} id={`contacts`} style={{ backgroundImage: `url(${contacts_bg})` }}>
        <Border string={'Контакты'} />
        <div className={s.contacts__whait_wrapp}>
          <div className={s.contacts__whait}>
            <p className={s.contacts__whait_text}>
              {contentState.data?.contact_title || 'здесь должен быть текст, но что-то пошло не так'}
            </p>
          </div>
        </div>
        <div className={s.contacts__form_wrapp}>
          <form className={s.contacts__form}
            onSubmit={(e) => sendEmail(e)}
          >
            <h4 className={s.contacts__form_title}>Обратная связь</h4>
            <p className={s.contacts__form_text}>Я обязательно прочту письмо и отвечу Вам.</p>
            <div className={s.contacts__form_inputs}>
              <input
                className={s.contacts__form_input}
                placeholder='Имя'
                type="text"
                value={name}
                onChange={e => setName(e.target.value.replace(/[A-Za-z0-9\s`~!@#$%^&*()_+-={}|:;<>?,.|_/"']/, ''))}
              />
              <input
                className={`${s.contacts__form_input} ${s.contacts__input_email}`}
                placeholder='Почта'
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value.replace(/[А-Яа-я\s`!#$%^&*()_={}|:;<>?,|_/"']/, ''))}
              />
            </div>
            <textarea
              className={s.contacts__form_textarea}
              placeholder="Напишите мне"
              onChange={e => setText(e.target.value.replace(/[^А-Яа-яЁё0-9\s\n0-9,.!?():;@&#%+|_/"' -]/, ''))}
              value={text}
            />
            <button className={s.contacts__form_btn}>Отправить</button>
          </form>
        </div>
      </section>
    </>
  )
}
)