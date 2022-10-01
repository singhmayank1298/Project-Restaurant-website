import { useContext } from "react";
import "./CartBox.css";
import Card from "../UI/Card";
import CartBoxItem from "./CartBoxItem";
import CartContext from "../store/cart-contener";

const CartBox = (props) => {
  const ItemArrayCtx = useContext(CartContext);
  const ItemArray = ItemArrayCtx.items;
  return (
    <>
      <div className="transparentScreen">
        <div className="AllItem">
          <Card>
            {ItemArray.map((x) => {
              return (
                <CartBoxItem
                  id={x.id}
                  item={x.itemName}
                  amount={x.amount}
                  quantity={x.quantity}
                ></CartBoxItem>
              );
            })}

            <h1 className="total">Total Amount {ItemArrayCtx.totalAmount} </h1>

            <footer className="actions">
              <button onClick={props.onClick}>close</button>
              <button>Order</button>
            </footer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CartBox;

// Approch for Cart
//1 Connect to Context api Array props where all items is store and iterate using map
//2 Now Update the Array like when user click on add make  an object and push to array

// 3 Now before add item check is it there .if there then increase only quantity and total amount on that item

//Approch  for + button
// When Button click ,execute a function and make a object and the property of object be id,oldquantity and amount
// Then invoke a Proviter function through ctx.addItem and pass a obj in it
// Then it wil  again check id in array and update a quantity and totalAmount of that item

// Approch for TotatAmount
// First make a state of totalAmount
// Then When ever Add Item happen and AddItem function will execute and it will add Item or Increase Quentity
// Aftet that just modifiy the totalAmount state
// And it will iterate to whole Array and pick TotalAmount then update state

// But when item add first time just Add totalAmount* quantity

//Aproch for total Item
// just Iterate throw CArtArray and Add quantity od all
