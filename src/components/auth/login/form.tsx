import React, { useState } from "react";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginForm() {
  const [passwordType, setPasswordType] = useState<string>("password");
  const passwordToggle = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
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
          className="cursor-pointer absolute top-1/2 right-0  -translate-y-1/2 px-3 hover:bg-gray/25 rounded-lg h-full"
        >
          {passwordType === "password" ? (
            <EyeIcon className="h-full w-6 text-primary/50 transition-colors duration-200 peer-focus:text-primary" />
          ) : (
            <EyeSlashIcon className="h-full w-6 text-primary/50 transition-colors duration-200 peer-focus:text-primary" />
          )}
        </div>
      </div>
    </form>
  );
}
