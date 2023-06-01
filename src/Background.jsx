
import React, { useState } from "react";




function Background() {
 
    const[darkColor,setColor]=useState(false)

    let themes={
        darkColor:{
            backgroundColor:'black'
        },
        lightColor:{
            backgroundColor:'yellow'
        }
    }

  return (
    <>
    <input onClick={()=>setColor(prev=>!prev)} type="checkbox" />
    <div style={darkColor? themes.darkColor :themes.lightColor}>
        hellow
    </div>


      
    </>
  );
}

export default Background;
