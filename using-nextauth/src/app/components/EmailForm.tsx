"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { CredentialsSignin } from "next-auth";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Invalid email or password");
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        // redirectTo: "/dashboard",
      });

      if (result?.error) {
        if (result.code === "credentials") {
          setError("Incorrect password, please try again");
        } else {
          setError("Invalid email or password"); // Set error message to state
        }
      } else {
        // Redirect to dashboard on successful login
        window.location.href = "/dashboard";
      }
    } catch (error) {
      const err = error as CredentialsSignin;
      console.log("err", err);
      return err.cause;
    }
  };

  return (
    <div>
      <h1> Please Login to continue </h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isSuccess && <p style={{ color: "green" }}> Successful </p>}
      <form className="border border-1" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="text-black"
        />
        <button type="submit"> Login</button>
      </form>
    </div>
  );
};

export default EmailForm;
