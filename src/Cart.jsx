import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import {cartContext} from './context/Context'

function Cart({}) {
    const [total,setTotal]=useState(0)
    const {cart}=useContext(cartContext)
    console.log(cart,'-------------')
    useEffect(()=>{
        // setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price ),0))

    },[cart])

  return (
    <div>
        <span style={{fontSize:30}}>my cart</span>
        <br />

        <span style={{fontSize:30}}>Total : Rs: {total}</span>
        <div className='productContainer'> 
        {
            cart.map((prod)=>(
                <SingleProduct product={prod} key={prod.id}  />

            ))
        }
         </div>
    </div>

  )
}

export default Cart