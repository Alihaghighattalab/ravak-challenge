import { InputComponent } from "./input"

export const ResetPasswordForm = () => {
    return (
        <div
            className="w-full max-w-[500px] p-5 md:p-5 h-fit xl:p-0 xl:h-auto xl:w-1/2 xl:max-w-none bg-login-card rounded-[40px] flex flex-col items-center justify-center xl:justify-start gap-y-8">
            <img src="/logo.svg" alt="logo" className="size-fit antialiased mt-0 xl:mt-20" />
            <div className="flex flex-col">
                <div className="flex flex-col text-center xl:text-right gap-3">
                    <span className="font-medium text-[32px]">بازیابی رمز عبور</span>
                    <span className="font-normal text-sm">کد تایید ارسال شده به شماره 09376225448 را وارد کنید. <span
                        className="text-primary-color font-medium cursor-pointer hover:text-primary-color-dark">ویرایش</span></span>
                </div>
                <div className="flex flex-col gap-y-[18px] w-full items-center mt-9">
                    <InputComponent placeholder='رمز عبور' />
                    <InputComponent placeholder='تکرار رمز عبور' />
                </div>
                <button className="mt-11">ذخیره</button>
            </div>
        </div>
    )
}