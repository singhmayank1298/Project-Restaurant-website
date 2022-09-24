import React, { useState } from "react";

import classes from "./Header.module.css";
import CartButton from "./CartButton";
import Mealimage from "../../assets/header image traininer.jpg"; //
import Summary from "../UI/Summary";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onClick}></CartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={Mealimage} alt="dksdkfmdk"></img>
      </div>
      <Summary></Summary>
    </>
  );
};

export default Header;
