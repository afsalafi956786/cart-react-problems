import React, { useState } from 'react'
import {faker} from '@faker-js/faker'

import SingleProduct from './SingleProduct';
import './styles.css'
import { Link } from 'react-router-dom';

faker.seed(100)

function Home({}) {
   
        
      
    const productArray=[...Array(20)].map(()=>(
        {
          id:faker.datatype.uuid(),
          name:faker.commerce.productName(),
          price:faker.commerce.price(),
          image:faker.image.avatarLegacy()
        
        }
        
    ))  
    const [products,setProducts]=useState(productArray);
    
   
    
  return (
    <>
    <div className='btn-new'>
        <Link to={'/Cart'} className='btns'>cart</Link> 
    </div>
   
<div className='prudctContainer'>
 
    {
        products.map((prod)=>(
            <SingleProduct key={prod.id} product={prod}/>
        ))
    }
 
</div>
</>
  )
}

export default Home