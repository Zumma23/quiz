import axios from "axios";
import React,{FC, useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { login } from "../../redux/actions/userAction";
const Login:FC = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch() 
  return(
    <>
    <h1>Login</h1>
    <div className="autorization">
      <div className="autorization__inner">
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
        <button onClick={()=> dispatch(login(email,password))} className="registrartion__btn">Войти</button>
      </div>
    </div>
    </>
  )
}

export default Login