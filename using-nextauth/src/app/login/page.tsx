import React from "react";
import LoginForm from "../components/LoginForm";
import EmailForm from "../components/EmailForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="text-lg">Please login to continue</p>
      <LoginForm />
      <EmailForm />
    </div>
  );
};

export default LoginPage;
