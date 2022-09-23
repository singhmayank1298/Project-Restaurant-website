import "./Input.css";

const Input = (props) => {
  return (
    <>
      <div className="input">
        <label>{props.label}</label>
        <input {...props.input}></input>
      </div>
    </>
  );
};

export default Input;
