import { useLocation } from "react-router-dom"
import { SidebarItems } from "../../../types"
import { sidebarItems } from "../../../utility/variables"
import clsx from "clsx"
import { FC } from "react"

type Props = {
    setShowSidebar: any
}
export const MobileSidebar: FC<Props> = ({ setShowSidebar }) => {
    const { pathname } = useLocation()
    const handleCloseSidenav = () => setShowSidebar(false)
    return (
        <div className="lg:hidden fixed top-0 left-full z-0 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-secondry-color w-max">
            <div className="size-5 rounded-full bg-sidebar-items-text-color flex justify-center text-white" onClick={handleCloseSidenav}>X</div>
            <div className="lg:hidden w-full h-full max-w-max p-[21px] flex flex-col gap-y-[44px] items-center xl:max-w-fit bg-secondry-color">
                <img src="/logo.svg" alt="logo" />
                <div className="h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-y-3">
                        {sidebarItems?.map((item: SidebarItems) => <div className={clsx("w-full p-3 rounded-[20px] text-sidebar-items-text-color font-normal text-base flex flex-row items-center gap-x-[12px] cursor-pointer", {
                            "bg-selected-sidebar-items text-selected-sidebar-items-text-color": pathname === item?.route
                        })} key={item?.id}>
                            <img src={item?.active ? `/svgs/active/${item?.name}.svg` : `/svgs/inactive/inactive-${item?.name}.svg`} alt={item?.name} className="max-w-[27px] max-h-[27px]" />
                            <p>{item?.title}</p>
                        </div>)}
                    </div>
                    <div className="w-full p-3 rounded-[20px] text-sidebar-items-text-color font-normal text-base flex flex-row items-center gap-x-[12px] cursor-pointer">
                        <img src="/svgs/inactive/inactive-exit.svg" alt="خروج" className="max-w-[27px] max-h-[27px]" />
                        <p>خروج</p>
                    </div>
                </div>
            </div>
        </div>
    )
}