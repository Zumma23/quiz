import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { login } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";
import "./Login.scss";
import Button from "../../components/Button/Button";
const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const useLogin = (email:string,password:string):any=>{
    dispatch(login(email, password))
  }

  return (
    <>
      <div className="autorization">
        <div className="autorization-wrapper">
          <h3 className="autorization__title">Log in to your account</h3>
          <div className="autorization__items">
            <Input
              value={email}
              setValue={setEmail}
              type="text"
              placeholder="Email"
            />
            <Input
              value={password}
              setValue={setPassword}
              type="password"
              placeholder="Password"
            />
            <button
              onClick={() => dispatch(login(email, password))}
              className="autorization__btn button"
            >
              Log In
            </button>
           
            <Link className="autorization__text" to="/registration">New to Wizzard Puzzels?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
