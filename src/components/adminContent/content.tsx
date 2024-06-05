import React, { memo } from 'react';
import s from './content.module.scss';
import { ShortDesc } from '../contentService/shortDesc';
import { LongDesc } from '../contentService/longDesc';
import { useCustomSelector } from '../../hooks/store';
import { selectContentData } from '../../redux/selectors';



export const Content: React.FC = memo(() => {
    const contentState = useCustomSelector(selectContentData);

    const shortDescContent = [
        { key: 'title', desc: 'Главный заголовок. Максимум символов', maxValue: 60, text: contentState.data?.title || '' },
        { key: 'btn', desc: 'Главная кнопка. Максимум символов', maxValue: 30, text: contentState.data?.btn || '' },
        { key: 'contact_title', desc: 'Контактный заголовок. Максимум символов', maxValue: 55, text: contentState.data?.contact_title || '' },
        { key: 'about_block_title_1', desc: 'Обо мне, первый заголовок. Максимум символов', maxValue: 30, text: contentState.data?.about_block_title_1 || '' },
        { key: 'about_block_title_2', desc: 'Обо мне, второй заголовок. Максимум символов', maxValue: 30, text: contentState.data?.about_block_title_2 || '' },
    ]

    const longDescContent = [
        { key: 'about_block_text_1', desc: 'Обо мне, первое текстовое описание. Максимум символов', maxValue: 830, text: contentState.data?.about_block_text_1 || '' },
        { key: 'about_block_text_2', desc: 'Обо мне, второе текстовое описание. Максимум символов', maxValue: 830, text: contentState.data?.about_block_text_2 || '' },
    ]

    return (
        <>
            <section className={s.adminPage}>
                <div className={s.adminPage__wrap}>
                    <div className={s.adminPage__content}>
                        {contentState.isLoading === `loaded` &&
                            shortDescContent.map((value) =>
                                <ShortDesc data={value} key={value.key} />
                            )
                        }
                        {contentState.isLoading === `loaded` &&
                            longDescContent.map((value) =>
                                <LongDesc data={value} key={value.key} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
})
