import { useState } from "react";
import CardButton1 from "../../CardButton/CardButton1";

const Cards1 = () => {

  const [isActive,setactive]=useState(false);

    return (
    
        
        <div className="xs100 m25 flex just_center  flex_dir_col just_AR mb20 mt20">
            <div className={isActive ? "xs100 flex just_center boxcolor boxstyle flex_dir_col just_AR mb20 mt20":"oculto"}>
            <h1 className="mb20">THIS IS A CARD</h1>
              <p>makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. </p>
            </div>


        
              <CardButton1 isActive={isActive}  setactive={setactive} />
         
        </div>



      

        
      
    );
}

export default Cards1;