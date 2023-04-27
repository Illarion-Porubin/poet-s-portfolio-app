import * as React from 'react';
import s from './myInfo.module.scss';
import avatar from "../../assets/png/avatar.png";

export const MyInfo = () => {
    const [value, setValue] = React.useState<string>('')

    const myInfo = ['Имя', 'Фамилия', 'Email']


    return (
        <>
            <div className={s.myInfo}>
                <div className={s.myInfo__content}>
                    <img className={s.myInfo__avatar} src={avatar} alt="avatar" />
                    <div className={s.myInfo__inputs}>
                        {
                            myInfo.map((item) =>
                                <input
                                    className={s.myInfo__input}
                                    type="text"
                                    placeholder={item}
                                    value={value}
                                    onChange={(e) => setValue(e.target?.value)}
                                    key={item}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
