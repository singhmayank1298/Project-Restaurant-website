import "./CartBox.css";
import Card from "../UI/Card";

const CartBox = () => {
  return (
    <>
      <div className="transparentScreen">
        <div className="container">
          <Card>
            <header className="cart-items">Sushi</header>
            <h1 className="total">Total Amount </h1>
            <input type="nubmer"></input>
            <footer className="actions">
              <button>close</button>
              <button>Order</button>
            </footer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CartBox;
