import "./UserForm.css";
import Input from "./Input";

const UserForm = () => {
  return (
    <form className="form">
      <Input label="Amount" input={{ type: "number", id: "1" }}></Input>
      <button>+Add</button>
    </form>
  );
};

export default UserForm;

{
  /* for input props  //importent object inside object the first curly bracces is javascript expration */
}
