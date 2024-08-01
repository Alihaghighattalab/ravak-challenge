import clsx from "clsx";
import { FC, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { sidebarItems } from "../../../utility/variables";
import { SidebarItems } from "../../../types";

type Props = {}

export const Sidebar: FC<Props> = () => {
    const { pathname } = useLocation()
    return (
        <Fragment>
            <div className="hidden w-full min-h-screen max-w-max p-[42px] lg:flex flex-col gap-y-[84px] items-center xl:max-w-fit bg-secondry-color">
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
        </Fragment >
    )
}