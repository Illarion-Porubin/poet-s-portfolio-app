import * as React from 'react';
import s from './addData.module.scss';
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';


interface Props {
    setData: any,
}

export const AddData: React.FC<Props> = ({ setData }) => {
    const tagsInput = React.useRef<HTMLDivElement>(null);
    const [dataTitle, setDataTitle] = React.useState<string>('');
    const [dataText, setDataText] = React.useState<string>('');
    const [active, setActive] = React.useState<boolean>(false);


    const onChange = React.useCallback((value: string) => {
        setDataText(value);
    }, []);

    const completed = () => {
        setData({title: dataTitle, text: dataText})
    }

    return (
        <>
            <h1>
                <div className={s.description}>
                    <div className={s.description__items}>
                        <div className={active ? `${s.description__item} ${s.active}` : s.description__item} ref={tagsInput}>
                            <div className={s.description__item_header}>
                                <div className={s.description__item_btns}>
                                    <button className={s.description__item_btn}
                                        onClick={completed}
                                    >
                                        <GlobalSvgSelecotr id='completed' />
                                    </button>
                                    <button
                                        className={s.description__item_btn}
                                    // onClick={() => setValue(long.text)}
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
                                <SimpleMDE value={dataText} onChange={onChange} />
                            </div>
                        </div>
                    </div>
                </div>

            </h1>
        </>
    );
}
