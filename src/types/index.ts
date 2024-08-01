export type SocialsType = "telegram" | "linkedin" | "instagram" | "whatsapp" | "facebook"
export type SidebarItems = {
    id: number,
    name: string,
    title: string,
    active: boolean,
    route?: string
}
export type Tiles = {
    id: number,
    name: string,
    title: string
    value: string
}