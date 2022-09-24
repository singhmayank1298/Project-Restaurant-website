import "./CartBox.css";
import Card from "../UI/Card";

const CartBox = (props) => {
  return (
    <>
      <div className="transparentScreen">
        <div className="AllItem">
          <Card>
            <header className="cart-items">Sushi</header>
            <h1 className="total">Total Amount </h1>
            <input type="nubmer"></input>
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
