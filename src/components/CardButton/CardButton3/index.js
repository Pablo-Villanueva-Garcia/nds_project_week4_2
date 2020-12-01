import React, { useState } from 'react';



const CardButton3 = (props) =>{
  const{isActive3 , setactive3}=props;
  
  const handletogglecard3 = () =>{
    setactive3(!isActive3);

  }
         
  
  return(

    <button onClick={handletogglecard3} >SEE CARD</button>

  )

};

  export default CardButton3;