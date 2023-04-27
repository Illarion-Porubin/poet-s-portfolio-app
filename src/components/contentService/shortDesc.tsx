import * as React from 'react';
import s from './desc.module.scss';
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { useCustomDispatch } from '../../hooks/store';
import { saveContent } from "../../redux/slices/contentSlice";


interface Props {
    short: { key: string, desc: string, text: any };
}

export const ShortDesc: React.FC<Props> = ({ short }) => {
    const dispatch = useCustomDispatch();
    const tagsInput = React.useRef<HTMLDivElement>(null);
    const [value, setValue] = React.useState<string>(short.text ? short.text : 'загрузка');
    const [active, setActive] = React.useState<boolean>(false);

    const completed = () => {
        const key = short.key ? short.key : '';
        if (!key) {
            alert('Ключ для сохранения не выбран')
        }
        setActive(false)
        dispatch(saveContent({ [key]: value }))
    }

    React.useMemo(() => {
        if (value !== short.text) {
            setActive(true)
        }
        else {
            setActive(false)

        }
    }, [value, short.text])

    return (
        <>
            <div className={s.description}>
                <div className={s.description__items}>
                    <div className={active ? `${s.description__item} ${s.active}` : s.description__item} ref={tagsInput}>
                        <div className={s.description__item_header}>
                            <h4 className={s.description__item_title}>{short.desc ? short.desc : 'загрузка'}</h4>
                            <div className={s.description__item_btns}>
                                <button className={s.description__item_btn}
                                    onClick={completed}
                                >
                                    <GlobalSvgSelecotr id='completed' />
                                </button>
                                <button
                                    className={s.description__item_btn}
                                    onClick={() => setValue(short.text)}
                                >
                                    <GlobalSvgSelecotr id={'cancel'}
                                    />
                                </button>
                            </div>
                        </div>
                        <div>
                            <input
                                className={s.description__item_content}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                                placeholder="Поменять текст..."
                                value={value}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

