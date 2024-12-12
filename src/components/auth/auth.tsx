import React, { useState } from "react";
import Login from "./login/login";
import SignUp from "./signup/signup";

function Authentication() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return <div className=" flex h-full">{isLogin ? <Login /> : <SignUp />}</div>;
}

export default Authentication;
