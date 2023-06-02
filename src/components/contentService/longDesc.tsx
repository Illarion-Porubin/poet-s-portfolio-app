import React, { memo } from 'react';
import s from './desc.module.scss';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { useCustomDispatch } from '../../hooks/store';
import { saveContent } from "../../redux/slices/contentSlice";

interface Props {
    long: { key: string, desc: string, text: string },
}

export const LongDesc: React.FC<Props> = memo(({ long }) => {
    const dispatch = useCustomDispatch();
    const tagsInput = React.useRef<HTMLDivElement>(null);
    const [value, setValue] = React.useState<string>(long.text ? long.text : 'загрузка');
    const [active, setActive] = React.useState<boolean>(false);

    const onChange = React.useCallback((value: string) => {
        setValue(value);
    }, []);

    const completed = () => {
        const key = long.key ? long.key : '';
        if (!key) {
            alert('Ключ для сохранения не выбран')
        }
        setActive(true)
        dispatch(saveContent({ [key]: value }))
    }

    React.useMemo(() => {
        if (value !== long.text) {
            setActive(false)
        }
    }, [value, long.text])

    const style = () => {
        if(active) {
            return `${s.description__item} ${s.active}`
        } 
        else {
            if (value !== long.text) {
                return `${s.description__item} ${s.false}`
            }
            else {
                return `${s.description__item}`
            }
        }
    }

    const options: any = React.useMemo(
        () => ({
            spellChecker: false,
            maxHeight: '400px',
            placeholder: 'Введите текст...',
            status: false,
        }),
        [],
    );

    return (
        <>
            <div className={s.description}>
                <div className={s.description__items}>
                    <div className={style()} ref={tagsInput}>
                        <div className={s.description__item_header}>
                            <h4 className={s.description__item_title}>{long.desc ? long.desc : 'загрузка'}</h4>
                            <div className={s.description__item_btns}>
                                <button className={s.description__item_btn}
                                    onClick={completed}
                                >
                                    <GlobalSvgSelecotr id='completed' />
                                </button>
                                <button
                                    className={s.description__item_btn}
                                    onClick={() => setValue(long.text)}
                                >
                                    <GlobalSvgSelecotr id={'cancel'}
                                    />
                                </button>
                            </div>
                        </div>
                        <div >
                            <SimpleMDE value={value} onChange={onChange} options={options}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})