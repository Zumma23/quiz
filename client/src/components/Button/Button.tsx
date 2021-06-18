import React, { FC } from "react";
import "./Button.scss";

interface IButton {
  email?:string,
  password?:string,
  text?: string,
  onClick?: (arg1?: string | '', arg2?: string | '') => void;
}

const Button: FC<IButton> = ({email,password, onClick}) => {

  return (
    <>
      <button  className="buttom">text</button>
    </>
  );
};

export default Button;
