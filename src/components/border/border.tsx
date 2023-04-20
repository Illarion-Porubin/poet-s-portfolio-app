import React from "react";
import s from "./border.module.scss";

interface Props {
    string: string
}

export const Border = ({ string }: Props) => {
    const about = <p className={s.border__title}>обо <span>мне</span></p>
    const title = <p className={s.border__title}>{string}</p>
    let line = string === `обо мне` ? about : title;

    return (
        <>
            <div className={s.border}>
                {line}
            </div> 
        </>
    )
}
