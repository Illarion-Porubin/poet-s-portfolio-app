import React, { memo } from 'react';
import s from './myInfo.module.scss';
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { useCustomSelector } from '../../hooks/store';
import { selectAuthData } from '../../redux/selectors';
import { UploadWidget } from '../Upload/UploadWidget';

interface Props {
    setData: (data: {
        firstName: string | undefined,
        lastName: string | undefined,
        email: string | undefined,
        id: string | undefined
    }) => void
}

export const MyInfo: React.FC<Props> = memo(({ setData }) => {
    const [firstName, setfirstName] = React.useState<string | undefined>('');
    const [lastName, setLastName] = React.useState<string | undefined>('');
    const [email, setEmail] = React.useState<string | undefined>('');
    const [active, setActive] = React.useState<boolean>(false);
    const authState = useCustomSelector(selectAuthData);

    React.useEffect(() => {
        if (authState.data?.user) {
            setfirstName(authState.data?.user?.firstName)
            setLastName(authState.data?.user?.lastName)
            setEmail(authState.data?.user?.email)
        }
    }, [authState.isLoading, authState.data?.user?.firstName, authState.data?.user?.lastName, authState.data?.user?.email, authState.data?.user])


    const saveData = () => {
        setActive(true)
        setData({ firstName, lastName, email, id: authState.data?.user.id })
    }

    const resetData = () => {
        setfirstName(authState.data?.user?.firstName)
        setLastName(authState.data?.user?.lastName)
        setEmail(authState.data?.user?.email)
    }

    return (
        <>
            <div className={s.myInfo}>
                <div className={s.myInfo__header}>
                    <div className={s.myInfo__completed} onClick={saveData}><GlobalSvgSelecotr id='completed' /></div>
                    <div className={s.myInfo__cancel} onClick={resetData}><GlobalSvgSelecotr id='cancel' /></div>
                </div>
                <div className={s.myInfo__content}>
                    <div className={s.myInfo__avatar}>
                        <UploadWidget requestFrom={'admin'} />
                    </div>
                    <div className={s.myInfo__inputs}>
                        <input
                            className={`${s.myInfo__input} ${firstName !== authState.data?.user?.firstName ? s.false : null} ${active && firstName !== authState.data?.user?.firstName ? s.active : null}`}
                            type="text"
                            placeholder='Имя'
                            value={firstName}
                            onChange={(e) => setfirstName(e.target?.value)}
                        />
                        <input
                            className={`${s.myInfo__input} ${lastName !== authState.data?.user?.lastName ? s.false : null} ${active && lastName !== authState.data?.user?.lastName ? s.active : null}`}
                            type="text"
                            placeholder='Фамилия'
                            value={lastName}
                            onChange={(e) => setLastName(e.target?.value)}
                        />
                        <input
                            className={`${s.myInfo__input} ${email !== authState.data?.user?.email ? s.false : null} ${active && email !== authState.data?.user?.email ? s.active : null}`}
                            type="text"
                            placeholder='Почта'
                            value={email}
                            onChange={(e) => setEmail(e.target?.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
})
