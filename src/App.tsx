import { ResetPasswordForm } from './components/reset-password-form';
import { SocialsComponent } from './components/socials';
import { socialsList } from "./utility/variables"

function App() {
  return (
    <>
      <section
        className="flex flex-row items-center xl:items-stretch justify-center xl:justify-between w-full h-screen p-6 gap-[60px]">
        <ResetPasswordForm />
        <div className="hidden xl:flex !w-1/2 h-full justify-center items-center">
          <img src="/reset-password.svg" alt="Reset password" className="w-auto antialiased" />
        </div>
      </section>
      <div className="hidden absolute bottom-6 left-6 xl:flex flex-row gap-[6px] items-center">
        {socialsList?.map((social: string) => <SocialsComponent type={social} key={social} />)}
      </div>
    </>
  );
}

export default App;
