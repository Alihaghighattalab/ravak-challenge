import { FC } from "react"

type Props = {
    setShowSidebar: any
}
export const Header: FC<Props> = ({ setShowSidebar }) => {
    const handleSidebar = () => setShowSidebar((prev: boolean) => !prev)
    return (
        <header className="w-full flex flex-row justify-between mb-[30px] xl:mb-[60px]">
            <div className="flex flex-row gap-3 items-center">
                <img src="/svgs/active/burger-menu.svg" alt="burger-menu" className="size-10 lg:hidden ml-1" onClick={handleSidebar} />
                <img src="/images/person.png" alt="phone" className="max-w-[45px] max-h-[45px] xl:max-w-[60px] xl:max-h-[60px] rounded-full" />
                <p className="hidden sm:flex font-normal text-base xl:text-lg text-selected-sidebar-items-text-color">علی مصلحی</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <p className="font-normal text-base xl:text-lg text-selected-sidebar-items-text-color">45597000-021</p>
                <img src="/svgs/active/phone.svg" alt="phone" className="max-w-[27px] max-h-[27px]" />
            </div>
        </header>
    )
}