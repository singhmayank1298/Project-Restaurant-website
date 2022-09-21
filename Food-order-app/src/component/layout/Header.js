import React,{useState} from 'react'

import classes from './Header.module.css'
import CartButton from "./CartButton"
import Mealimage from "../../assets/header image traininer.jpg" //
import Summary from '../UI/Summary'

const Header=()=>{
const[ItemCount,setItemCount]=useState(0)
    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
           <CartButton value="Your Item" count={ItemCount}></CartButton>
           </header>
           <div className={classes["main-image"]}>
           <img src={Mealimage} alt="dksdkfmdk"></img>
           </div>
          <Summary></Summary>
           </>
    )

}

export default Header