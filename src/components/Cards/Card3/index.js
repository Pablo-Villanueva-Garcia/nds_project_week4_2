import { useState } from "react";
import CardButton3 from "../../CardButton/CardButton3";

const Cards3 = () => {

 
  
    const [isActive3,setactive3]=useState(false);
   
    return (
    
        
    <div className="xs100 m25 flex just_center boxcolor boxstyle flex_dir_col just_AR mb20 mt20">

        <div className={isActive3 ? "xs100 flex just_center boxcolor flex_dir_col just_AR mb20 mt20":"oculto"}>
                <h1  className="mb20"> THIS IS A CARD</h1>
                <p> makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
        </div>


    
         <CardButton3 isActive3={isActive3}  setactive3={setactive3}/>
     
    </div>




      

        
      
    );
}

export default Cards3;