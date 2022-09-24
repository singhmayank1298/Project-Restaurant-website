import { useContext } from "react";

import "./CartButton.css";
import CartIcon from "./CartIcon";
import CartContext from "../store/cart-contener";

const CartButton = (props) => {
  const Cartctx = useContext(CartContext);
  const numberOfCartItems = Cartctx.items.length;
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
