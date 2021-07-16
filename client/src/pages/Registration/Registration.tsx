import React, { FC, useState } from "react";
import Input from "../../components/Input/Input";
import { registration } from "../../redux/actions/user";

import { useSelector, useDispatch } from "react-redux";
const Registration: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((state: any) => state.message.message);
  console.log(message);

  return (
    <>
      <div className="autorization">
        <div className="autorization-wrapper">
          <h3 className="autorization__title">Sign up for free</h3>
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
              onClick={() => dispatch(registration(email, password))}
              className="registrartion__btn button"
            >
              Create free account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
