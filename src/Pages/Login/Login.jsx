import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar as es } from "notistack";

export const Login = () => {
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const foemData = new FormData(e.target);
    const value = Object.fromEntries(foemData);
    const { username, password } = value;
    if (username === "admin" && password === "admin") {
      localStorage.setItem("token", Math.random() * 100000000000000);
      navigate("/");
      es("Tizimga xush kelibsiz!", { variant: "success" });
      return null;
    }

    es("Login yoki parol xato!", { variant: "warning" });
  };

  return (
    <div className="page login">
      <form onSubmit={handelSubmit}>
        <h1>Abdujabborov Oybek</h1>
        <input
          type="text"
          name="username"
          placeholder="Login"
          required
          autoComplete="off"
          autoFocus
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Tizimga kirish" />
      </form>
    </div>
  );
};
