import { SidebarItems, SocialsType, Tiles } from "../types";

export const socialsList: SocialsType[] = ["whatsapp", "telegram", "instagram", "linkedin", "facebook"]
export const sidebarItems: SidebarItems[] | [] = [
    {
        id: 0,
        name: "home",
        title: "صفحه اصلی",
        active: true,
        route: "/"
    },
    {
        id: 1,
        name: "user",
        title: "حساب من",
        active: false,
    },
    {
        id: 2,
        name: "wallet",
        title: "کیف پول",
        active: false,
    },
    {
        id: 3,
        name: "cart",
        title: "مدیریت حساب های بانکی",
        active: false,
    },
    {
        id: 4,
        name: "report",
        title: "گزارش نصب ها",
        active: false,
    },
    {
        id: 5,
        name: "transactions",
        title: "تراکنش ها",
        active: false,
    },
    {
        id: 6,
        name: "star",
        title: "امتیاز من",
        active: false,
    },
    {
        id: 7,
        name: "subscription",
        title: "گزارش تمدید اشتراک اینترنتی",
        active: false,
    },
]
export const tilesItems: Tiles[] | [] = [
    {
        id: 3,
        name: "dollar",
        title: "دارایی دلاری",
        value: "8 $"
    },
    {
        id: 2,
        name: "coin",
        title: "دارایی از تمدید اشتراک",
        value: "300,535 تومان"
    },
    {
        id: 1,
        name: "score",
        title: "امتیاز شرکت در قرعه کشی",
        value: "65"
    },
    {
        id: 0,
        name: "device",
        title: "تعداد کل دستگاه ثبت شده موفق",
        value: "171"
    }
]