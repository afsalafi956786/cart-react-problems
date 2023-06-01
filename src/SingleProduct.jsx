import React, { useContext, useState } from 'react'
import {cartContext} from './context/Context'

function SingleProduct({product}) {

    const {cart,setCart}=useContext(cartContext)
  
    
    
  return (
    <div className='products'>
        <img src={product?.image} alt="" />
        <div className='productsDesc'>
            <span style={{fontWeight:700}}>{product?.name} </span>
            <span>$ {product?.price.substring(0,3)} </span>
        </div>
        
        {
           
         cart.includes(product) ? (
                <button onClick={()=>{
            setCart(cart.filter((car)=>car.id !== product.id) )
        }} className='add'>Remove Cart</button>
            ):(
                <button onClick={()=>{
            setCart([...cart,product])
        }} className='add'>Add to cart</button>
            )
        }
        


    </div>
  )
}

export default SingleProduct