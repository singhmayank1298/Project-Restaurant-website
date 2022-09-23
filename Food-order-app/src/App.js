import CartBox from "./component/Cart/CartBox";
import Header from "./component/layout/Header";
import Display from "./component/Meal/DisplayMeals";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Display></Display>
      {ReactDOM.createPortal(
        <CartBox></CartBox>,
        document.getElementById("Cart_Box")
      )}
    </div>
  );
}

export default App;
