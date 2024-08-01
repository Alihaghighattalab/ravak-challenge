import React, { FC, Fragment, useState } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { Footer } from "./footer"
import { MobileSidebar } from "./mobile-sidebar"

type Props = {
    children: React.ReactNode
}
export const HomeLayout: FC<Props> = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    return (
        <Fragment>
            <div className="flex flex-row">
                <Sidebar />

                <div className="flex flex-col w-full p-[30px] max-h-screen overflow-y-auto xl:max-h-none xl:overflow-auto">
                    <Header setShowSidebar={setShowSidebar} />
                    <div className="h-screen">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
            {showSidebar && <MobileSidebar setShowSidebar={setShowSidebar}/>}
        </Fragment>
    )
}