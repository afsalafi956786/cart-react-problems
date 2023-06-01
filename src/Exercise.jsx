import React, { useState } from "react";
import "./App.css";

function Exercise() {
  const stars = ["☆", "☆", "☆", "☆", "☆"];
  // const [darkTheme, setDarktheme] = useState(false);
  const [darkTheme,setDarkTheme]=useState(false)
 

  // const theme = {
  //   darkTheme: {
  //     backgroundColor: "gray",
  //   },
  //   ligtTheme: {
  //     backgroundColor: "yellow",
  //   },
  // };

   const theme={
    darkTheme:{
      backgroundColor:'red'
    },
    whiteTheme:{
      backgroundColor:'green'
    }
   }

  return (
    <>
      {/* <input
        onClick={() => setDarktheme((prevThem) => !prevThem)}
        type="checkbox"
      />
      <p style={darkTheme ? theme.darkTheme : theme.ligtTheme} className="">
        yyyyyy
      </p> */}
    
    <input onClick={()=>setDarkTheme(prev=>!prev)} type="checkbox" />

    <p style={darkTheme?theme.darkTheme :theme.whiteTheme} >hellow world</p>
    
    </>
  );
}

export default Exercise;
