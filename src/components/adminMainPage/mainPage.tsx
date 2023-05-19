import React, { memo } from 'react';
import s from './mainPage.module.scss';
import { ShortDesc } from '../contentService/shortDesc';
import { LongDesc } from '../contentService/longDesc';
import { ContentState } from '../../redux/slices/contentSlice';

interface Props {
    contentState: ContentState,
}

export const MainPage: React.FC<Props> = memo(({ contentState }) => {

    const shortDescription = React.useMemo( () => [
        { key: 'main_title', desc: 'Вступительная странциа, заголовок', text: contentState.data?.content?.main_title || 'загруза' },
        { key: 'main_btn', desc: 'Вступительная странциа, кнопка', text: contentState.data?.content?.main_btn || 'загруза' },
        { key: 'about_block_title_1', desc: 'Обо мне, заголовок 1', text: contentState.data?.content?.about_block_title_1 || 'загруза' },
        { key: 'about_block_title_2', desc: 'Обо мне, заголовок 2', text: contentState.data?.content?.about_block_title_2 || 'загруза' },
        { key: 'contact_title', desc: 'Контакты, заголовок', text: contentState.data?.content?.contact_title || 'загруза' },
    ], [contentState.data])

    const longDescription = React.useMemo( () => [
        { key: 'about_block_text_1', desc: 'Обо мне, текстовый блок 1', text: contentState.data?.content?.about_block_text_1 || 'загруза' },
        { key: 'about_block_text_2', desc: 'Обо мне, текстовый блок 2', text: contentState.data?.content?.about_block_text_2 || 'загруза' },
    ], [contentState.data])


    return (
        <>
            <section className={s.adminPage}>
                <div className={s.adminPage__wrap}>
                    <div className={s.adminPage__content}>
                        {contentState.isLoading === `loaded` ?
                            shortDescription.map((value) =>
                                <ShortDesc short={value} key={value.desc} />
                            )
                            : null
                        }
                        {contentState.isLoading === `loaded` ?
                            longDescription.map((value) =>
                                <LongDesc long={value} key={value.desc} />
                            )
                            : <h1>Загрузка</h1>
                        }
                    </div>
                </div>
            </section>
        </>
    );
})
