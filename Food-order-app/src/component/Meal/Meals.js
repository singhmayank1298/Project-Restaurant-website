import "./Meals.css";

import Card from "../UI/Card";
import UserForm from "./UserForm";

const Meals = (props) => {
  return (
    <Card>
      <li>
        <div className="container">
          <div className="change">
            <h3 className="meal">{props.item} </h3>

            <p>{props.description}</p>
            <p className="price">{props.amount}</p>
          </div>
          <div className="container2">
            <UserForm
              item={props.item}
              id={props.id}
              amount={props.amount}
            ></UserForm>
            {/*// vary importent line sending props*/}
          </div>
        </div>
      </li>
    </Card>
  );
};

export default Meals;
