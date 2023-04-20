import * as React from 'react';
import s from './desc.module.scss';
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';

interface Props {
    short: { id: string, desc: string, text: any };  
    newContetnt: any
}

export const ShortDesc: React.FC<Props> = ({ short, newContetnt }) => {
    const [content, setСontent] = React.useState<string>(short.text ? short.text : 'загрузка');
  

    return (
        <>
            <div className={s.adminMain}>
                <div className={s.adminMain__itwms}>
                    <div className={s.adminMain__item}>
                        <div className={s.adminMain__item_header}>
                            <h4 className={s.adminMain__item_title}>{short.desc ? short.desc : 'загрузка'}</h4>
                            <div className={s.adminMain__item_btns}>
                                <button className={s.adminMain__item_btn}
                                    // onClick={() => saveContent({[inputId]: content})}
                                >
                                    <GlobalSvgSelecotr id='completed' /></button>
                                <button className={s.adminMain__item_btn}><GlobalSvgSelecotr id={'cancel'} /></button>
                            </div>
                        </div>
                        <div>
                            <input
                                // onClick={(e: any) => setInputId(e.target.id)}
                                className={s.adminMain__item_content}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setСontent(e.target.value)}
                                placeholder="Поменять текст..."
                                id={short.id ? short.id : 'загрузка'}
                                value={content}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

