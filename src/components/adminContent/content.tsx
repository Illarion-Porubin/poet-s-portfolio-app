import React, { memo } from 'react';
import s from './content.module.scss';
import { ShortDesc } from '../contentService/shortDesc';
import { LongDesc } from '../contentService/longDesc';
import { ContentState } from '../../redux/slices/contentSlice';

interface Props {
    contentState: ContentState;
}

export const Content: React.FC<Props> = memo(({ contentState }) => {

    const titleContent = React.useMemo(() => [
        { key: 'main_title', desc: 'Заголовок. Допустмое значение символов', maxValue: 60, text: contentState.data?.content?.main_title || '' },
        { key: 'main_btn', desc: 'Кнопка. Допустмое значение символов', maxValue: 30, text: contentState.data?.content?.main_btn || '' },
    ], [contentState.data])

    const contactContent = React.useMemo(() => [
        { key: 'contact_title', desc: 'Заголовок. Допустмое значение символов', maxValue: 55, text: contentState.data?.content?.contact_title || '' },
    ], [contentState.data])

    const aboutMeTitleContent = React.useMemo(() => [
        { key: 'about_block_title_1', desc: 'Блок 1, заголовок. Допустмое значение символов', maxValue: 30, text: contentState.data?.content?.about_block_title_1 || '' },
        { key: 'about_block_title_2', desc: 'Блок 2, заголовок. Допустмое значение символов', maxValue: 30, text: contentState.data?.content?.about_block_title_2 || '' },
    ], [contentState.data])

    const aboutMeDescContent = React.useMemo(() => [
        { key: 'about_block_text_1', desc: 'Блок 1, текстовое описание. Допустмое значение символов', maxValue: 830, text: contentState.data?.content?.about_block_text_1 || '' },
        { key: 'about_block_text_2', desc: 'Блок 2, текстовое описание. Допустмое значение символов', maxValue: 830, text: contentState.data?.content?.about_block_text_2 || '' },
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
