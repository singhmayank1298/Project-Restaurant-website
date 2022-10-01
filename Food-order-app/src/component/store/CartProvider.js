import CartContext from "./cart-contener.js";
import { useState } from "react";

const Array = [];
const CartProvider = (props) => {
  const [AllItems, setAllItems] = useState(Array);
  const [TotalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (addNewItem) => {
    // console.log(addNewItem);
    for (let i = 0; i < AllItems.length; i++) {
      if (AllItems[i].id === addNewItem.id) {
        AllItems[i].quantity =
          parseInt(AllItems[i].quantity) + parseInt(addNewItem.quantity); // parseInt convert string to number

        AllItems[i].totalAmount =
          parseInt(AllItems[i].amount) * parseInt(AllItems[i].quantity);

        console.log(AllItems);
        let newTotalAmount = 0;
        for (let i = 0; i < AllItems.length; i++) {
          newTotalAmount = newTotalAmount + Number(AllItems[i].totalAmount);
        }

        setTotalAmount(() => {
          return newTotalAmount;
        });
        return;
      }
    }

    setAllItems((LastArray) => {
      //Iteam is a last state means last array
      return [...LastArray, addNewItem];
    });

    setTotalAmount((PreviousAmount) => {
      const newTotalAmount =
        parseInt(PreviousAmount) +
        parseInt(addNewItem.totalAmount) * parseInt(addNewItem.quantity);
      return newTotalAmount;
    });
  };

  const removeItemToCartHandler = (id) => {
    for (let i = 0; i < AllItems.length; i++) {
      if (AllItems[i].id === id.id) {
        AllItems[i].quantity = parseInt(AllItems[i].quantity) - parseInt("2");
        console.log(id.id);
      }
    }
  };

  const cartContext = {
    items: AllItems,
    totalAmount: TotalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
