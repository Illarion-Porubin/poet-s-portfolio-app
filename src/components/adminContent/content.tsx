import React, { memo } from 'react';
import s from './content.module.scss';
import { ShortDesc } from '../contentService/shortDesc';
import { LongDesc } from '../contentService/longDesc';
import { fetchGetContetn } from '../../redux/slices/contentSlice';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectContentData } from '../../redux/selectors';


export const Content: React.FC = memo(() => {
    const contentState = useCustomSelector(selectContentData);
    // const dispatch = useCustomDispatch();

    // React.useEffect(() => {
    //     dispatch(fetchGetContetn());
    // }, [dispatch]);

    const titleContent = React.useMemo(() => [
        { key: 'title', desc: 'Заголовок. Допустимое значение символов', maxValue: 60, text: contentState.data?.title || '' },
        { key: 'btn', desc: 'Кнопка. Допустимое значение символов', maxValue: 30, text: contentState.data?.btn || '' },
    ], [contentState.data])

    const contactContent = React.useMemo(() => [
        { key: 'contact_title', desc: 'Заголовок. Допустимое значение символов', maxValue: 55, text: contentState.data?.contact_title || '' },
    ], [contentState.data])

    const aboutMeTitleContent = React.useMemo(() => [
        { key: 'about_block_title_1', desc: 'Блок 1, заголовок. Допустимое значение символов', maxValue: 30, text: contentState.data?.about_block_title_1 || '' },
        { key: 'about_block_title_2', desc: 'Блок 2, заголовок. Допустимое значение символов', maxValue: 30, text: contentState.data?.about_block_title_2 || '' },
    ], [contentState.data])

    const aboutMeDescContent = React.useMemo(() => [
        { key: 'about_block_text_1', desc: 'Блок 1, текстовое описание. Допустимое значение символов', maxValue: 830, text: contentState.data?.about_block_text_1 || '' },
        { key: 'about_block_text_2', desc: 'Блок 2, текстовое описание. Допустимое значение символов', maxValue: 830, text: contentState.data?.about_block_text_2 || '' },
    ], [contentState.data])


    return (
        <>
            <section className={s.adminPage}>
                <div className={s.adminPage__wrap}>
                    <div className={s.adminPage__content}>
                        <h1 className={s.adminPage__content_title}>{contentState.isLoading === `loaded` ? `Вступительная страница` : null}</h1>
                        {contentState.isLoading === `loaded` ?
                            titleContent.map((value) =>
                                <ShortDesc data={value} key={value.desc} />
                            )
                            : null
                        }
                        <h1 className={s.adminPage__content_title}>{contentState.isLoading === `loaded` ? `Обо мне` : null}</h1>
                        {contentState.isLoading === `loaded` ?
                            aboutMeTitleContent.map((value) =>
                                <ShortDesc data={value} key={value.desc} />
                            )
                            :
                            null
                        }
                        {contentState.isLoading === `loaded` ?
                            aboutMeDescContent.map((value) =>
                                <LongDesc data={value} key={value.desc} />
                            )
                            :
                            null
                        }
                        <h1 className={s.adminPage__content_title}>{contentState.isLoading === `loaded` ? `Контакты` : null}</h1>
                        {contentState.isLoading === `loaded` ?
                            contactContent.map((value) =>
                                <ShortDesc data={value} key={value.desc} />
                            )
                            :
                            null
                        }
                    </div>
                </div>
            </section>
        </>
    );
})
