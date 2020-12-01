import { useState } from "react";
import CardButton2 from "../../CardButton/CardButton2";

const Cards2 = () => {

 
  
    const [isActive2,setactive2]=useState(false);
  
    return (
    
        
    <div className="xs100 m25 flex just_center boxcolor boxstyle flex_dir_col just_AR mb20 mt20">

        <div className={isActive2 ? "xs100 flex just_center boxcolor flex_dir_col just_AR mb20 mt20":"oculto"}>
                <h1  className="mb20"> THIS IS A CARD</h1>
                <p> makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
        </div>


    
          <CardButton2 isActive2={isActive2}  setactive2={setactive2}/>
     
    </div>




      

        
      
    );
}

export default Cards2;