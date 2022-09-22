import  './Meals.css'

import Card from '../UI/Card'




const Meals=(props)=>{
return(
    
    <Card >
      
        <p className='meal'>{props.item} </p>
        <p className='description'>{props.description}</p>
        <p className='price' >{props.amount}</p>


    </Card>
        
)
}

export default Meals