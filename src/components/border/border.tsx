import React from "react";
import s from "./border.module.scss";

interface Props {
    string: string
}

export const Border = ({ string }: Props) => {
    const about = <h3 className={s.border__title}>обо <span>мне</span></h3>
    const title = <h3 className={s.border__title}>{string}</h3>
    let line = string === `обо мне` ? about : title;

    return (
        <>
            <div className={s.border}>
                <h3 className={s.border__title}>{line}</h3>
            </div>
        </>
    )
}
