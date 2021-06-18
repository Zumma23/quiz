import React, { FC } from "react";

import "./Input.scss"
interface IInput {
  type: string;
  placeholder: string;
  value: string;
  setValue: any;
}

const Input: FC<IInput> = (props) => {
  return (
    <>
      <input
      className="input"
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
