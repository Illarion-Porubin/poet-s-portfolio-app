import * as React from 'react';
import s from './desc.module.scss';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';

interface Props {
    long: { id: string, desc: string, text: any },
}

export const LongDesc: React.FC<Props> = ({ long }) => {
    const [content, setСontent] = React.useState<string>(long.text ? long.text : 'загрузка');

    const onChange = React.useCallback((value: string) => {
        setСontent(value);
    }, []);

    return (
        <>
            <div className={s.adminMain}>
                <div className={s.adminMain__itwms}>
                    <div className={s.adminMain__item}>
                        <div className={s.adminMain__item_header}>
                            <h4 className={s.adminMain__item_title}>{long.desc ? long.desc : 'загрузка'}</h4>
                            <div className={s.adminMain__item_btns}>
                                <button className={s.adminMain__item_btn}><GlobalSvgSelecotr id='completed'/></button>
                                <button className={s.adminMain__item_btn}><GlobalSvgSelecotr id='cancel'/></button>
                            </div>
                        </div>
                        <div >
                            <SimpleMDE value={content} onChange={onChange} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}