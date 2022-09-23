import "./Meals.css";

import Card from "../UI/Card";
import UserForm from "./UserForm";

const Meals = (props) => {
  return (
    <Card>
      <div className="container">
        <div className="change">
          <h3 className="meal">{props.item} </h3>

          <p>{props.description}</p>
          <p className="price">{props.amount}</p>
        </div>
        <div className="container2">
          <UserForm></UserForm>
        </div>
      </div>
    </Card>
  );
};

export default Meals;
