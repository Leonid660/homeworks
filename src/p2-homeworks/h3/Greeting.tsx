import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter:(e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.Input// need to fix with (?:)

    return (
        <div>
            <div>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                // onKeyDown={onEnter}
                onBlur={setNameCallback}
            />
                <span className={s.error}>{error}</span>
            </div>

            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
