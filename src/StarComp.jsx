import React, { useEffect, useState } from 'react'
import './App.css'

function StarComp() {

  let stars=['☆','☆','☆','☆','☆'];
  let numbers=[1,2,3,4,5,3];
  const [count,setCount]=useState(0);
  const[change,setChange]=useState('post')
  const [clickbtn,setClicked]=useState('click')

  function clicked(){
    setClicked('clicked')

  }

  useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${change}`)
  .then(response=>response.json()).then(json=>console.log(json))
   
     

  },[change])


  
  return (
    <>
    {/* <h1>hellow</h1>

    <div  className='div-star'>
      {stars.map((star,index)=>(
        <h2 onClick={()=>setCount(index+1)} key={index} className={`stars ${count>index ? 'text-yellow':'text-black'} `}>{star}</h2>
      )) 
          
      }
    
    </div>

    <h2 style={{textAlign:'center'}}>Count :{count} </h2> */}
    
   <div className='div-star'>
    {
      stars.map((star,index)=>(
        <h1 onClick={()=>setCount(index+1)} className={`star ${count>index ? 'text-yellow':'text-black'} `}>{star}</h1>
      ))
    }

   </div>

  <h1 style={{textAlign:'center'}} className=''>{count}</h1>

  
   <button onClick={()=>setChange('post')} >Post</button>
   <button onClick={()=>setChange('users')}>users</button>
   <button onClick={()=>setChange('gallery')}>gallery</button>
  
  <h2>{change}</h2>

  <button onClick={()=>clicked(prev=>!prev)}>{clickbtn}</button>
    
    </>
  )
}

export default StarComp