import './App.css';
import { ResetPasswordForm } from './components/reset-password-form';
import { SocialComponent } from './components/socials';

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
      <SocialComponent />
    </>
  );
}

export default App;
