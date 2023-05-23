import React, { memo } from 'react';
import SimpleMDE from "react-simplemde-editor";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { useCustomDispatch } from '../../hooks/store';
import { ComonTypes } from '../../types/types';
import axios from '../../http';
import s from './add.module.scss';
import "easymde/dist/easymde.min.css";

interface Props {
    id: string | null | undefined,
    setData: (poem: ComonTypes) => void,
    componentName: string,
}

export const AddData: React.FC<Props> = memo(({ setData, id, componentName }) => {
    const dispatch = useCustomDispatch()
    const [dataTitle, setDataTitle] = React.useState<string>('');
    const [dataText, setDataText] = React.useState<string>('');
    const [active, setActive] = React.useState<boolean>(false);
    const dataId = React.useRef<null | string | undefined>(id)

    const onChange = React.useCallback((value: string) => {
        setDataText(value);
    }, []);

    const completed = () => {
        setData({ title: dataTitle, text: dataText, id: dataId.current })
        setActive(true)
    }

    const reset = () => {
        setDataTitle('')
        setDataText('')
        dataId.current = null
        setActive(false)
    }

    React.useEffect(() => {
        if (dataId.current) {
            if (componentName === 'Добавить статью') {
                axios.get(`api/article/${dataId.current}`).then((res) => {
                    const data = res.data.article;
                    setDataTitle(data.title)
                    setDataText(data.text)
                    dataId.current = data._id
                })
            }
            else {
                axios.get(`api/poem/${dataId.current}`).then((res) => {
                    const data = res.data.poem;
                    setDataTitle(data.title)
                    setDataText(data.text)
                    dataId.current = data._id
                })
            }
        }
        reset()
    }, [dispatch, id, componentName])


    const options: any = React.useMemo(
        () => ({
            spellChecker: false,
            maxHeight: '400px',
            autofocus: true,
            placeholder: 'Введите текст...',
            status: false,
        }),
        [],
    );

    return (
        <>
            <h1>
                <div className={s.description}>
                    <div className={s.description__items}>
                        <div className={active ? `${s.description__item} ${s.active}` : s.description__item}>
                            <div className={s.description__item_header}>
                                <div className={s.description__item_btns}>
                                    <button disabled={dataText || dataTitle ? false : true} className={s.description__item_btn}
                                        onClick={completed}
                                    >
                                        <GlobalSvgSelecotr id='completed' />
                                    </button>
                                    <button
                                        className={s.description__item_btn}
                                        onClick={() => reset()}
                                    >
                                        <GlobalSvgSelecotr id={'cancel'}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <input
                                    className={s.description__item_content}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataTitle(e.target.value)}
                                    placeholder="Название"
                                    value={dataTitle}
                                />
                            </div>
                            <div>
                                <SimpleMDE value={dataText} onChange={onChange} options={options} />
                            </div>
                        </div>
                    </div>
                </div>

            </h1>
        </>
    );
})