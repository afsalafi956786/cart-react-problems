import React, { useEffect, useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);


  const [names,setNames]=useState('')
  const [password,setPass]=useState('')
  const [email,setEmail]=useState('')

 let disabledButton=!email || password.length<6 || !names

  function handleclick() {
    setDisplay(!display);
  }


  function handleSubmit(){
    try{
        if(email && password && names){


        }else{
            alert('all fileds are required')
        }

    }catch(e){
        console.log(e.message);
    }
  }
 

  return (
    <div>
      <div className="btn-divs">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="btn"
        >
          +
        </button>{" "}
        <p>{count}</p>{" "}
        <button
          onClick={() => {
            if (0<count) setCount(count - 1);
          }}
          className="btn"
        >
          -
        </button>
      </div>

      <div>
        {/* //inpupt */}
        <label htmlFor="">
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <button onClick={handleclick}>click me</button>
        {display && <h2>{name}</h2>}
      </div>

      <div className="inputs">
        <label htmlFor="">
          
          Name
          <input value={names} onChange={(e)=>setNames(e.target.value)} className="field" type="text" />
        </label>
        <label htmlFor="">
          
          email
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="field" type="text" />
        </label>
        <label htmlFor="">
          password
          <input value={password} onChange={(e)=>setPass(e.target.value)} className="field" type="text" />
        </label>

        <button disabled={disabledButton} onClick={handleSubmit} type='submit' style={{marginTop:'12px'}}>submit</button>
      </div>
    </div>
  );
}

export default Counter;
