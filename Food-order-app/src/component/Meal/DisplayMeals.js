import Meals from "./Meals";
import "./DisplayMeal.css";

let DummyMeals = [
  {
    Item: "Sushi",
    Description: "Finest fish and veggies",
    Amount: "$22.99",
    key: "1",
  },
  {
    Item: "Schnitzel",
    Description: "A german specialty",
    Amount: "$16.99",
    key: "2",
  },
  {
    Item: "Barbecue Burger",
    Description: "American,raw,meaty",
    Amount: "$12.99",
    key: "3",
  },
  {
    Item: "Green Bowl",
    Description: "Healty..and green",
    Amount: "$42.99",
    key: "4",
  },
];

const Display = () => {
  return (
    <>
      <div className="meals">
        {DummyMeals.map((x) => {
          return (
            <Meals
              key={x.key}
              item={x.Item}
              description={x.Description}
              amount={x.Amount}
            ></Meals>
          );
        })}
      </div>
    </>
  );
};

export default Display;
