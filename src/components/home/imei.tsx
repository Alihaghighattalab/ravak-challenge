import { InputComponent } from "../input"

export const IMEI = () => {
    return (
        <div className="w-full h-fit items-center xl:items-stretch xl:h-fit flex flex-col xl:flex-row xl:justify-between bg-secondry-color p-[30px] mt-[30px] rounded-[40px]">
            <img src="/svgs/home-image.svg" alt="page home" className="size-96" />
            <div className="flex flex-col justify-between items-end w-full">
                <div className="flex flex-col w-full gap-y-10 xl:gap-y-20">
                    <InputComponent placeholder="کد IMEI" icon={false} styles="w-full !max-w-none" />
                    <p className="font-medium text-base text-black text-wrap text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                </div>
                <button className="w-full sm:max-w-[170px] mt-10 lg:mt-20 xl:mt-0">ثبت کد</button>
            </div>
        </div>
    )
}