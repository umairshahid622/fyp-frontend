import loginImage from "@/assets/auth/loginImage.jpg";
import Logo from "../../logo";
import LoginForm from "./form";

function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg bg-white overflow-auto">
      <img
        className="hidden md:block w-full h-full"
        src={loginImage.src}
        alt=""
      />
      <div className=" flex flex-col gap-5 items-center text-slate-900 w-full py-5 px-4">
        <Logo />
        <p className="text-lg text-gray">
          Join us and get more benefits. We promise to keep your data safely.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
