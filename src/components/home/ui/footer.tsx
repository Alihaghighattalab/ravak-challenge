import { socialsList } from "../../../utility/variables"
import { SocialsComponent } from "../../socials"

export const Footer = () => {
    return (
        <footer className="w-full xl:flex justify-end hidden">
            <div className="flex flex-row gap-x-[6px]">
                {socialsList?.map((social: string) => <SocialsComponent type={social} key={social} />)}
            </div>
        </footer>
    )
}   