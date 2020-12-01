import React, { useState } from 'react';



const CardButton2 = (props) =>{
  const{isActive2,setactive2}=props;
  const handletogglecard2 = () =>{
    setactive2(!isActive2);

  }
         
  
  return(

    <button onClick={handletogglecard2} >SEE CARD</button>

  )

};

  export default CardButton2;