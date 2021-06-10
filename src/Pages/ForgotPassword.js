import React from "react";
import "./Auth.scss";
import Header from "../Components/Header";
import HomeBG from "../Assets/HomeBG.png";
import InputBox from "../Components/InputBox";
import LoginButton from "../Components/BtnComponent";
import { Link } from "react-router-dom";
import BtnComponent from "../Components/BtnComponent";

export default function Login() {
  return (
    <>
      <div className="login__page">
        <img src={HomeBG} alt="login__bg" />
        <div className="login__bg__overlay">
          <form className="login__form">
            <div className="login__form__heading">Reset Password</div>
            <InputBox placeholder="Email" type="email" />

            <BtnComponent
              placeholder="Reset Password"
              btnStyle={{ margin: "2.5em 0em", minWidth: "200px" }}
            />
            <Link className="login__form__row__link" to="/">
              Log In
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
