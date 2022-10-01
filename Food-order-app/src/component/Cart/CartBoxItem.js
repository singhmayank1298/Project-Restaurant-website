import { useContext } from "react";
import CartContext from "../store/cart-contener";
import Card from "../UI/Card";

const CartBoxItem = (props) => {
  const ctx = useContext(CartContext);

  const ExtraAddItemHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const obj = {
      id: props.id,
      quantity: e.target[0].value,
      amount: props.amount,
    };

    ctx.addItem(obj);
  };

  const ExtraRemoveItemHandler = () => {
    const obj = {
      id: props.id,
    };
    ctx.removeItem(obj);
    console.log(obj);
  };

  const InputChangeHandler = (e) => {
    e.target.value = "1";
  };

  return (
    <Card>
      <form onSubmit={ExtraAddItemHandler}>
        <header className="cart-items">{props.item}</header>
        <span>{props.quantity}</span>
        <input onChange={InputChangeHandler} value="1"></input>
        <button type="submit">+</button>
        <button type="numper" onClick={ExtraRemoveItemHandler}>
          -
        </button>
      </form>
    </Card>
  );
};

export default CartBoxItem;
