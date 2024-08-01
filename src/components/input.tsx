import { FC } from "react"

type Props = {
    placeholder: string
}
export const InputComponent: FC<Props> = ({ placeholder }) => {
    return (
        <div className="input-component">
            <input type="text" className="main-input" placeholder={placeholder} />
            <img src="/eye.svg" alt="eye" className="size-[23px]" />
        </div>
    )
}