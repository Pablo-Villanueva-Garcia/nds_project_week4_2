import React, { useState } from 'react';



const CardButton1 = (props) =>{
  
  const{isActive , setactive}=props;
  const handletogglecard1 = () =>{
    setactive(!isActive);

  }
         
  
  return(

    <button onClick={handletogglecard1} >SEE CARD</button>

  )

};

  export default CardButton1;