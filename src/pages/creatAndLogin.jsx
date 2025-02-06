import React, { useRef } from "react";
import Login from "../component2/login/login";
import Signup from "../component2/login/signup";
import "../component2/login/log.css";

export default function CreatAndLogin() {


  const loginSectionRef = useRef(null);
  const signupSectionRef = useRef(null);
  const handleScrollToLogin = () => {
    loginSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleScrollToSignup = () => {
    signupSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleValidSignIn = () => {
 
  };
  return (
    <div style={{ overflow: "hidden", height: "130vh" }}>
      <div ref={signupSectionRef}>
        <Signup handleScrollToLogin={handleScrollToLogin} />
      </div>
      <div ref={loginSectionRef}>
        <Login
          handleScrollToSignup={handleScrollToSignup}
          onValidSignIn={handleValidSignIn}
        />
      </div>
    </div>
  );
}
