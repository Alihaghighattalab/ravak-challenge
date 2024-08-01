import { FC } from "react";

type Props = {
    type: string
}

export const SocialsComponent: FC<Props> = ({ type = "telegram" }) => {
    const renderSocial = (model: string) => {
        switch (model) {
            case "whatsapp":
                return "whatsapp"
            case "facebook":
                return "facebook"
            case "instagram":
                return "instagram"
            case "telegram":
                return "telegram"
            default:
                return "linkedin"
        }
    }
    return (
        <img src={`${renderSocial(type)}.svg`} alt={`${renderSocial(type)}`} className="cursor-pointer" />
    )
}