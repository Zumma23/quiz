import React, { FC, useState } from "react";
import Input from "../../components/Input/Input";
import { registration } from "../../redux/actions/userAction";

const Registration: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
          <h1>Регистрация</h1>

      <div className="registration__inner">
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
        <button onClick={()=> registration(email,password)} className="registrartion__btn">Войти</button>
      </div>
    </div>
  );
};

export default Registration;
