import { useContext } from "react";
import CartContext from "../store/cart-contener";
import "./Input.css";

const Input = (props) => {
  return (
    <>
      <div className="input">
        <label>{props.label}</label>
        <input defaultValue="1" {...props.input}></input>
      </div>
    </>
  );
};

export default Input;
