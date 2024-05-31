import React, { memo } from 'react';
import s from './myInfo.module.scss';
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectAuthData, selectContentData } from '../../redux/selectors';
// import { UploadWidget } from '../Upload/UploadWidget';
import { InputMask } from 'primereact/inputmask';
import { fetchGetContetn } from '../../redux/slices/contentSlice';

interface Props {
    setData: (data: {
        firstName: string,
        photo_url: string,
        lastName: string,
        email: string,
        phone: string,
        card: string,
        id: string
    }) => void,
}

export const MyInfo: React.FC<Props> = memo(({ setData }) => {
    const dispatch = useCustomDispatch()
    const contentState = useCustomSelector(selectContentData);
    const [active, setActive] = React.useState<boolean>(false);

    const [userData, setUserData] = React.useState<{[key: string]: string}>({
        firstName: '',
        photo_url: '',
        lastName: '',
        email: '',
        phone: '',
        card: '',
    })

    React.useEffect(() => {
        if (contentState.data) {
            return setUserData({...contentState.data});
        }
    }, [contentState.data])

    const saveData = () => {
        setActive(!active)
        setData( Object({ ...userData, id: contentState.data!.id }))
    }

    const deleteData = () => {
        setActive(false)
        dispatch(fetchGetContetn())
    }

    return (
        <>
            <div className={s.myInfo}>
                <div className={s.myInfo__header}>
                    <div className={s.myInfo__completed} onClick={saveData}><GlobalSvgSelecotr id={!active ? 'completed' : 'pencil'} /></div>
                    <div className={s.myInfo__cancel} onClick={deleteData}><GlobalSvgSelecotr id='cancel' /></div>
                </div>
                <div className={s.myInfo__content}>
                    <div className={s.myInfo__avatar}>
                        {/* <UploadWidget requestFrom={'admin'} /> */}
                    </div>
                    <div className={s.myInfo__inputs}>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="firstName" className={s.myInfo__desc}>Имя:</label>
                            <input
                                id='firstName'
                                className={`${s.myInfo__input} ${userData.firstName !== contentState.data?.firstName ? s.false : null} ${active && userData.firstName !== contentState.data?.firstName ? s.active : null}`}
                                type="text"
                                placeholder='Имя'
                                value={userData.firstName}
                                disabled={active}
                                onChange={(e) => setUserData({...userData, firstName: e.target?.value})}
                            />
                        </div>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="lastName" className={s.myInfo__desc}>Фамилия:</label>
                            <input
                                id='lastName'
                                className={`${s.myInfo__input} ${userData.lastName !== contentState.data?.lastName ? s.false : null} ${active && userData.lastName !== contentState.data?.lastName ? s.active : null}`}
                                type="text"
                                placeholder='Фамилия'
                                value={userData.lastName}
                                disabled={active}
                                onChange={(e) => setUserData({...userData, lastName: e.target?.value})}
                            />
                        </div>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="email" className={s.myInfo__desc}>Почта:</label>
                            <input
                                id="email"
                                className={`${s.myInfo__input} ${userData.email !== contentState.data?.email ? s.false : null} ${active && userData.email !== contentState.data?.email ? s.active : null}`}
                                type="text"
                                placeholder='Почта'
                                value={userData.email}
                                disabled={active}
                                onChange={(e) => setUserData({...userData, email: e.target?.value})}
                            />
                        </div>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="phone" className={s.myInfo__desc}>Телефон:</label>
                            <input
                                className={`${s.myInfo__input} ${userData.phone !== contentState.data?.phone ? s.false : null} ${active && userData.phone !== contentState.data?.phone ? s.active : null}`}
                                id="phone"
                                // mask="9 (999) 999 99 99"
                                placeholder="Телефон"
                                value={userData.phone}
                                disabled={active}
                                onChange={(e) => setUserData({...userData, phone: e.target?.value})}
                            />
                        </div>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="card" className={s.myInfo__desc}>Карта:</label>
                            <input
                                className={`${s.myInfo__input} ${userData.card !== contentState.data?.card ? s.false : null} ${active && userData.card !== contentState.data?.card ? s.active : null}`}
                                id="card"
                                // mask="9999 9999 9999 9999"
                                placeholder="Карта"
                                value={userData.card}
                                disabled={active}
                                onChange={(e) => setUserData({...userData, card: e.target?.value})}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})
