import React from 'react';
import s from './poemPage.module.scss';
import poem_bg from '../../assets/jpg/poem_bg.jpg';
import { Menu } from '../../components/menu/menu';
import { PoemList } from '../../components/poemList/poemList';
import { Pagination } from '../../components/pagination/pagination';
import { PopupPoem } from '../../components/popup/popupPoem';


const list = [
  {
    id: '9846868768468',
    name: `Ты меня не любишь, не жалеешь`,
    content: `Ты меня не любишь, не жалеешь,
Разве я немного не красив?
Не смотря в лицо, от страсти млеешь,
Мне на плечи руки опустив.

Молодая, с чувственным оскалом,
Я с тобой не нежен и не груб.
Расскажи мне, скольких ты ласкала?
Сколько рук ты помнишь? Сколько губ?

Знаю я — они прошли, как тени,
Не коснувшись твоего огня,
Многим ты садилась на колени,
А теперь сидишь вот у меня.

Пусть твои полузакрыты очи
И ты думаешь о ком-нибудь другом,
Я ведь сам люблю тебя не очень,
Утопая в дальнем дорогом.

Этот пыл не называй судьбою,
Легкодумна вспыльчивая связь,—
Как случайно встретился с тобою,
Улыбнусь, спокойно разойдясь.

Да и ты пойдешь своей дорогой
Распылять безрадостные дни,
Только нецелованных не трогай,
Только негоревших не мани.

И когда с другим по переулку
Ты пойдешь, болтая про любовь,
Может быть, я выйду на прогулку,
И с тобою встретимся мы вновь.

Отвернув к другому ближе плечи
И немного наклонившись вниз,
Ты мне скажешь тихо: «Добрый вечер…»
Я отвечу: «Добрый вечер, miss».

И ничто души не потревожит,
И ничто ее не бросит в дрожь,—
Кто любил, уж тот любить не может,
Кто сгорел, того не подожжешь.`
},

  { id: '94543583468', name: `название 2`, content: `содержание 2` },
  { id: '98463445468', name: `название 3`, content: `содержание 3` },
  { id: '98412316846', name: `название 4`, content: `содержание 4` },
  { id: '32313251312', name: `название 5`, content: `содержание 5` },
  { id: '34324223423', name: `название 6`, content: `содержание 6` },
  { id: '12312323322', name: `название 7`, content: `содержание 7` },
  { id: '23123124123', name: `название 8`, content: `содержание 8` },
  { id: '23214124123', name: `название 8`, content: `содержание 8` },
  { id: '23231231231', name: `название 8`, content: `содержание 8` },
  { id: '22131234424', name: `название 8`, content: `содержание 8` },
  { id: '44332323244', name: `название 8`, content: `содержание 8` },
  { id: '53553553232', name: `название 8`, content: `содержание 8` },
  { id: '66624344343', name: `название 8`, content: `содержание 8` },
  { id: '77774234234', name: `название 8`, content: `содержание 8` },
  { id: '45454544445', name: `название 8`, content: `содержание 8` },
  { id: '32223333434', name: `название 8`, content: `содержание 8` },
  { id: '23123123222', name: `название 8`, content: `содержание 8` },
  { id: '34543232444', name: `название 8`, content: `содержание 8` },
  { id: '44322234344', name: `название 1`, content: `содержание 1` },
  { id: '55553322221', name: `название 2`, content: `содержание 2` },
  { id: '33535666643', name: `название 3`, content: `содержание 3` },
  { id: '23232223333', name: `название 4`, content: `содержание 4` },
  { id: '44412422211', name: `Очень и очень длинное название стиха`, content: `содержание 5` },
]



export const PoemPage: React.FC = () => {
  const [display, setDisplay] = React.useState<boolean>(true);
  const [id, setId] = React.useState<number>(0)

  const hideContent = () => {
    setDisplay(prev => !prev)
  }

  const gentIndex = (value: any) => {
    setDisplay(prev => !prev)
    setId(value)
  }

  console.log(display)

  return (
    <>
      <section className={s.poem} style={{ backgroundImage: `url(${poem_bg})` }}>
        <Menu />
        {/* <div className='container'>
        </div> */}
          <div className={display ? s.poem__wrapp : s.poem__not_wrapp}>
            <div className={s.poem__head}>
              <h3 className={s.poem__title}>Cписок стихов</h3>
              <div className={s.poem__search}>
                <input 
                  className={s.poem__search_input} type="text"
                />
                <button className={s.poem__search_btn}>поиск</button>
              </div>
            </div>
            {display ?
              <ul className={s.poem__list}>
                <div className={s.poem__content}>
                  {list.map((items, index) =>
                    <PoemList items={items} gentIndex={gentIndex} display={display} key={items.id} index={index} />
                  )}
                </div>
              </ul>
              :
              <PopupPoem item={list[id]} hideContent={hideContent} display={display} />
            }
          </div>
        <Pagination />
      </section>
    </>
  )
}
