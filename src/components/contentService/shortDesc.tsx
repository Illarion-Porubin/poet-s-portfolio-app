import React, { memo } from 'react';
import s from './desc.module.scss';
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { contentSlice } from "../../redux/slices/contentSlice";
import { selectContentData } from '../../redux/selectors';

interface Props {
    data: { key: string, desc: string, maxValue: number, text: string };
}

export const ShortDesc: React.FC<Props> = memo(({ data }) => {
    const dispatch = useCustomDispatch();
    const contentState = useCustomSelector(selectContentData);
    const tagsInput = React.useRef<HTMLDivElement>(null);
    const [value, setValue] = React.useState<string>(data.text);
    const [active, setActive] = React.useState<boolean>(false);

    const completed = () => {
        const key = data.key ? data.key : '';
        if (!key) {
            return alert('Ключ для сохранения не выбран')
        }
        setActive(true)
        console.log({ [key]: value });
        dispatch(contentSlice.actions.newContent({...contentState.newData,  [key]: value }))
    }

    const cancel = () => {
        setValue(data.text)
        setActive(false)
    }

    React.useEffect(() => {
        if (contentState.data) {
            setActive(false)
        }
    }, [contentState.data])

    const style = () => {
        if (active) {
            return `${s.description__item} ${s.active}`
        }
        else {
            if (value !== data.text) {
                return `${s.description__item} ${s.false}`
            }
            else {
                return `${s.description__item}`
            }
        }
    }

    return (
        <>
            <div className={s.description}>
                <div className={s.description__items}>
                    <div className={style()} ref={tagsInput}>
                        <div className={s.description__item_header}>
                            <div className={s.description__item_header_block}>
                                <h4 className={s.description__item_title}>{`${data.desc}: ${data.maxValue}`}</h4>
                                <p className={value.length >= data.maxValue ? `${s.description__item_header_symbol} ${s.active}` : s.description__item_header_symbol}>Символов:<span>
                                    {value.length}</span>
                                </p>
                            </div>
                            <div className={s.description__item_btns}>
                                <button className={s.description__item_btn}
                                    onClick={completed}
                                    disabled={active}
                                >
                                    <GlobalSvgSelecotr id='completed' />
                                </button>
                                <button
                                    className={s.description__item_btn}
                                    onClick={cancel}
                                >
                                    <GlobalSvgSelecotr id={'cancel'}
                                    />
                                </button>
                            </div>
                        </div>
                        <div>
                            <input
                                className={s.description__item_content}
                                disabled={active}
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
})

