import React, { memo } from 'react';
import s from './content.module.scss';
import { ShortDesc } from '../contentService/shortDesc';
import { LongDesc } from '../contentService/longDesc';
import { ContentState } from '../../redux/slices/contentSlice';

interface Props {
    contentState: ContentState;
}

export const Content: React.FC<Props> = memo(({ contentState }) => {

    const shortDescription = React.useMemo( () => [
        { key: 'main_title', desc: 'Вступительная странциа, заголовок', text: contentState.data?.content?.main_title || '' },
        { key: 'main_btn', desc: 'Вступительная странциа, кнопка', text: contentState.data?.content?.main_btn || '' },
        { key: 'about_block_title_1', desc: 'Обо мне. Блок 1, заголовок', text: contentState.data?.content?.about_block_title_1 || '' },
        { key: 'about_block_title_2', desc: 'Обо мне. Блок 2, заголовок', text: contentState.data?.content?.about_block_title_2 || '' },
        { key: 'contact_title', desc: 'Контакты, заголовок', text: contentState.data?.content?.contact_title || '' },
    ], [contentState.data])

    const longDescription = React.useMemo( () => [
        { key: 'about_block_text_1', desc: 'Обо мне. Блок 1, текст', text: contentState.data?.content?.about_block_text_1 || '' },
        { key: 'about_block_text_2', desc: 'Обо мне. Блок 2, текст', text: contentState.data?.content?.about_block_text_2 || '' },
    ], [contentState.data])


    return (
        <>
            <section className={s.adminPage}>
                <div className={s.adminPage__wrap}>
                    <div className={s.adminPage__content}>
                        {contentState.isLoading === `loaded` ?
                            shortDescription.map((value) =>
                                <ShortDesc short={value} key={value.desc}/>
                            )
                            : null
                        }
                        {contentState.isLoading === `loaded` ?
                            longDescription.map((value) =>
                                <LongDesc long={value} key={value.desc}/>
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
