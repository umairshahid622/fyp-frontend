import React, { useState } from "react";
import Login from "./login/login";
import SignUp from "./signup/signup";

function Authentication({ isLoginPage }: { isLoginPage: boolean }) {
  const [isLogin, setIsLogin] = useState<boolean>(isLoginPage);

  return isLogin ? (
    <Login setIsLogin={setIsLogin} />
  ) : (
    <SignUp setIsLogin={setIsLogin} />
  );
}

export default Authentication;
