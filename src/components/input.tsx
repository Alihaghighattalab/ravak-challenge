import { FC } from "react"

type Props = {
    placeholder: string
    icon?: boolean,
    styles?: string
}
export const InputComponent: FC<Props> = ({ placeholder, icon = true, styles }) => {
    return (
        <div className={`input-component  ${styles}`}>
            <input type="text" className="main-input" placeholder={placeholder} />
            {icon && <img src="/eye.svg" alt="eye" className="size-[23px]" />}
        </div>
    )
}