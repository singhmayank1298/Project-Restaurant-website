import "./UserForm.css";
import { useContext, useState } from "react";
import Input from "./Input";
import CartContext from "../store/cart-contener";

const UserForm = (props) => {
  const ArrayCtx = useContext(CartContext);

  const AddItemHandeler = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);

    const NewItem = {
      itemName: props.item,
      quantity: parseInt(e.target[0].value),
      amount: props.amount,
      id: props.id,
      totalAmount: props.amount,
    };

    ArrayCtx.addItem(NewItem);
    console.log(ArrayCtx.items);
  };

  return (
    <form onSubmit={AddItemHandeler} className="form">
      <Input
        // onAddQuantity={AddQuantityHandaler}
        label="Amount"
        input={{ type: "number", id: "1" }} // defaultValue of input Importent
      ></Input>
      <button type="submit">+Add</button>
    </form>
  );
};

export default UserForm;

{
  /* for input props  //importent object inside object the first curly bracces is javascript expration */
}
