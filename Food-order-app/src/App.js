import CartBox from "./component/Cart/CartBox";
import Header from "./component/layout/Header";
import Display from "./component/Meal/DisplayMeals";
import ReactDOM from "react-dom";
import { useState } from "react";

function App() {
  const [isCartButton, setisCartButton] = useState(false);

  const CartBoxHandler = () => {
    setisCartButton(true);
  };

  const CartBoxCloseHandler = () => {
    setisCartButton(false);
  };

  return (
    <div>
      <Header></Header>
      <Display></Display>
      {isCartButton === true
        ? ReactDOM.createPortal(
            <CartBox onClick={CartBoxCloseHandler}></CartBox>,
            document.getElementById("Cart_Box")
          )
        : ""}
    </div>
  );
}

export default App;
