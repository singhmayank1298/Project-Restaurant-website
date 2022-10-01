import { useContext } from "react";

import "./CartButton.css";
import CartIcon from "./CartIcon";
import CartContext from "../store/cart-contener";

const CartButton = (props) => {
  const Cartctx = useContext(CartContext);
  // const numberOfCartItems = Cartctx.items.reduce((a, b) => {
  //   console.log(b);
  let numberOfCartItems = 0;
  for (let i = 0; i < Cartctx.items.length; i++) {
    numberOfCartItems = numberOfCartItems + Cartctx.items[i].quantity;
  }
  //   return a.quantity + b.quantity;
  // }, 0);
  return (
    <>
      <button onClick={props.onClick} className="button">
        <CartIcon></CartIcon>
        {numberOfCartItems}
      </button>
    </>
  );
};

export default CartButton;
