import React, { memo } from 'react';
import s from './myInfo.module.scss';
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { useCustomSelector } from '../../hooks/store';
import { selectAuthData } from '../../redux/selectors';
import { UploadWidget } from '../Upload/UploadWidget';
import { InputMask } from 'primereact/inputmask';
interface Props {
    setData: (data: {
        firstName: string | undefined,
        lastName: string | undefined,
        email: string | undefined,
        phone: string | undefined,
        card: string | undefined,
        id: string | undefined
    }) => void,
    active: boolean,
    setActive: (value: boolean) => void
}

export const MyInfo: React.FC<Props> = memo(({ setData, setActive, active }) => {
    const [firstName, setfirstName] = React.useState<string | undefined>('');
    const [lastName, setLastName] = React.useState<string | undefined>('');
    const [email, setEmail] = React.useState<string | undefined>('');
    const [phone, setPhone] = React.useState<any>('');
    const [card, setCard] = React.useState<any>('');
    const authState = useCustomSelector(selectAuthData);

    React.useEffect(() => {
        if (authState.data?.user) {
            setfirstName(authState.data?.user?.firstName)
            setLastName(authState.data?.user?.lastName)
            setEmail(authState.data?.user?.email)
            setPhone(authState.data?.user?.phone)
            setCard(authState.data?.user?.card)
        }
    }, [
        authState.isLoading,
        authState.data?.user?.firstName,
        authState.data?.user?.lastName,
        authState.data?.user?.email,
        authState.data?.user?.card,
        authState.data?.user?.phone,
        authState.data?.user,
    ])


    const saveData = () => {
        setActive(!active)
        setData({ firstName, lastName, email, phone, card, id: authState.data?.user.id })
    }

    const resetData = () => {
        setfirstName(authState.data?.user?.firstName)
        setLastName(authState.data?.user?.lastName)
        setEmail(authState.data?.user?.email)
        setPhone(authState.data?.user?.phone)
        setCard(authState.data?.user?.card)
        setActive(false)
    }

    return (
        <>
            <div className={s.myInfo}>
                <div className={s.myInfo__header}>
                    <div className={s.myInfo__completed} onClick={saveData}><GlobalSvgSelecotr id={!active ? 'completed' : 'pencil'} /></div>
                    <div className={s.myInfo__cancel} onClick={resetData}><GlobalSvgSelecotr id='cancel' /></div>
                </div>
                <div className={s.myInfo__content}>
                    <div className={s.myInfo__avatar}>
                        <UploadWidget requestFrom={'admin'} />
                    </div>
                    <div className={s.myInfo__inputs}>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="firstName" className={s.myInfo__desc}>Имя:</label>
                            <input
                                id='firstName'
                                className={`${s.myInfo__input} ${firstName !== authState.data?.user?.firstName ? s.false : null} ${active && firstName !== authState.data?.user?.firstName ? s.active : null}`}
                                type="text"
                                placeholder='Имя'
                                value={firstName}
                                disabled={active}
                                onChange={(e) => setfirstName(e.target?.value)}
                            />
                        </div>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="lastName" className={s.myInfo__desc}>Фамилия:</label>
                            <input
                                id='lastName'
                                className={`${s.myInfo__input} ${lastName !== authState.data?.user?.lastName ? s.false : null} ${active && lastName !== authState.data?.user?.lastName ? s.active : null}`}
                                type="text"
                                placeholder='Фамилия'
                                value={lastName}
                                disabled={active}
                                onChange={(e) => setLastName(e.target?.value)}
                            />
                        </div>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="email" className={s.myInfo__desc}>Почта:</label>
                            <input
                                id="email"
                                className={`${s.myInfo__input} ${email !== authState.data?.user?.email ? s.false : null} ${active && email !== authState.data?.user?.email ? s.active : null}`}
                                type="text"
                                placeholder='Почта'
                                value={email}
                                disabled={active}
                                onChange={(e) => setEmail(e.target?.value)}
                            />
                        </div>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="phone" className={s.myInfo__desc}>Телефон:</label>
                            <InputMask
                                className={`${s.myInfo__input} ${phone !== authState.data?.user?.phone ? s.false : null} ${active && phone !== authState.data?.user?.phone ? s.active : null}`}
                                id="phone"
                                mask="9 (999) 999 99 99"
                                placeholder={phone}
                                value={phone}
                                disabled={active}
                                onChange={(e) => { setPhone(e.target.value) }}
                            />
                        </div>
                        <div className={s.myInfo__content_input}>
                            <label htmlFor="card" className={s.myInfo__desc}>Карта:</label>
                            <InputMask
                                className={`${s.myInfo__input} ${card !== authState.data?.user?.card ? s.false : null} ${active && card !== authState.data?.user?.card ? s.active : null}`}
                                id="card"
                                mask="9999 9999 9999 9999"
                                placeholder={card}
                                value={card}
                                disabled={active}
                                onChange={(e) => { setCard(e.target.value) }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})
