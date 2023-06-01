import { useState } from 'react'
import Background from './Background'
import Cart from './Cart'
import Exercise from './Exercise'
import Home from './Home'
import StarComp from './StarComp'
import Counter from './counter'
import { Route,Routes } from 'react-router-dom'


function App() {
 
  // const [cart,setCart]=useState([])

  return (
    <>
    <Routes>
      <Route  path='/' element={<StarComp/>} ></Route>
      <Route path='/style' element={<Exercise/>} ></Route>
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path='/back' element={<Background/>}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/cart' element={<Cart />} ></Route>


    </Routes>


    </>
  )
}

export default App
