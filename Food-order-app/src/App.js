import CartBox from "./component/Cart/CartBox";
import Header from "./component/layout/Header";
import Display from "./component/Meal/DisplayMeals";
import ReactDOM from "react-dom";
import { useState } from "react";
import CartProvider from "./component/store/CartProvider";

function App() {
  const [isCartButton, setisCartButton] = useState(false);

  const CartBoxHandler = () => {
    setisCartButton(true);
  };

  const CartBoxCloseHandler = () => {
    setisCartButton(false);
  };

  return (
    <CartProvider>
      <Header onClick={CartBoxHandler}></Header>
      <Display></Display>
      {isCartButton === true
        ? ReactDOM.createPortal(
            <CartBox onClick={CartBoxCloseHandler}></CartBox>,
            document.getElementById("Cart_Box")
          )
        : ""}
    </CartProvider>
  );
}

export default App;
