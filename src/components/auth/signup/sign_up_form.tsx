import Button from "@/components/button";
import { FacebookIcon, GoogleIcon } from "@/components/svgIcons";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function SignUpForm() {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmPasswordType, setConfirmPasswordType] =
    useState<string>("password");

  const passwordToggle = () => {
    setPasswordType((prev: string) =>
      prev === "password" ? "text" : "password"
    );
  };

  const confirmPasswordToggle = () => {
    setConfirmPasswordType((prev: string) =>
      prev === "password" ? "text" : "password"
    );
  };
  return (
    <form className=" w-full space-y-5">
      <div className="relative">
        <input
          type="text"
          className="placeholder-shown:text-black peer bg-slate-200 w-full pl-3 pr-14 py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          placeholder="Email Address"
        />
        <div className="absolute top-1/2 right-0  -translate-y-1/2 px-3 h-full">
          <EnvelopeIcon className="h-full w-6 text-primary/50 transition-colors duration-200 peer-focus:text-primary" />
        </div>
      </div>
      <div className="relative">
        <input
          type={passwordType}
          className="placeholder-shown:text-black peer bg-slate-200 w-full pl-3 pr-14 py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          placeholder="Password"
        />
        <div
          onClick={passwordToggle}
          className="cursor-pointer absolute top-1/2 right-0  -translate-y-1/2 px-3 hover:bg-gray/10 rounded-lg h-full"
        >
          {passwordType === "password" ? (
            <EyeSlashIcon className="h-full w-6 text-primary/50 transition-colors duration-200 peer-focus:text-primary" />
          ) : (
            <EyeIcon className="h-full w-6 text-primary/50 transition-colors duration-200 peer-focus:text-primary" />
          )}
        </div>
      </div>
      <div className="relative">
        <input
          type={confirmPasswordType}
          className="placeholder-shown:text-black peer bg-slate-200 w-full pl-3 pr-14 py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          placeholder="Confirm Password"
        />
        <div
          onClick={confirmPasswordToggle}
          className="cursor-pointer absolute top-1/2 right-0  -translate-y-1/2 px-3 hover:bg-gray/10 rounded-lg h-full"
        >
          {confirmPasswordType === "password" ? (
            <EyeSlashIcon className="h-full w-6 text-primary/50 transition-colors duration-200 peer-focus:text-primary" />
          ) : (
            <EyeIcon className="h-full w-6 text-primary/50 transition-colors duration-200 peer-focus:text-primary" />
          )}
        </div>
      </div>
      <Button
        className="bg-green-700 hover:bg-primary rounded-lg w-full text-white py-2.5"
        handleClick={() => console.log("Login clicked")}
      >
        Login
      </Button>
      <p className="text-center">Or</p>
      <Button
        className="bg-[#4267B2] hover:bg-[#153e90] rounded-lg w-full text-white py-2.5"
        handleClick={() => console.log("Login clicked")}
      >
        <div className="flex items-center justify-center gap-3">
          <FacebookIcon />
          <h1>Continue with Facebook</h1>
        </div>
      </Button>
      <Button
        className=" rounded-lg w-full border border-primary py-2.5"
        handleClick={() => console.log("Login clicked")}
      >
        <div className="flex items-center justify-center gap-3">
          <GoogleIcon />
          <h1>Continue with Google</h1>
        </div>
      </Button>
    </form>
  );
}
