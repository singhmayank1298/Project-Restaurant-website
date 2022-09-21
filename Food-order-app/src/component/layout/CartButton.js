import './CartButton.css'
import CartIcon from './CartIcon'







const CartButton=(props)=>{
return(
    <>

    <button className="button" >
    <CartIcon></CartIcon>
     {` ${props.value}     ${props.count}`}
    </button>
    </>
)
}

export default CartButton 

