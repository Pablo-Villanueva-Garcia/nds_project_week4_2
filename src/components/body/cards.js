import { useState } from "react";
import Hiddencard from "./hidden_card"

const Cards = () => {

  const listacards = [
    {id:1, text:'makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'},
    {id:2, text:'makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'},
    {id:3, text:'makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'},
    
  ];

  const [card,setcard]=useState([listacards]);
  
  const [isActive,setactive]=useState(false);
  const handletogglecard1 = () =>{
    setactive(!isActive);

  }

  const [isActive2,setactive2]=useState(false);
  const handletogglecard2 = () =>{
    setactive2(!isActive2);

  }

  const [isActive3,setactive3]=useState(false);
  const handletogglecard3 = () =>{
    setactive3(!isActive3);

  }

  

    return (
      <div  className="centrado just_SB flex_frw bodysize flex_dir_col ali_center">
        
        <div className="xs100 m25 flex just_center boxcolor boxstyle flex_dir_col just_AR mb20 mt20">
            <div className={isActive ? "xs100 flex just_center boxcolor flex_dir_col just_AR mb20 mt20":"oculto"}>
            <h1 className="mb20">THIS IS A CARD</h1>
              <p>makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. </p>
            </div>


        
              <button onClick={handletogglecard1} >SEE CARD</button>
         
        </div>

        <div className="xs100 m25 flex just_center boxcolor boxstyle flex_dir_col just_AR mb20 mt20">
            <div className={isActive2 ? "xs100 flex just_center boxcolor flex_dir_col just_AR mb20 mt20":"oculto"}>
            <h1  className="mb20"> THIS IS A CARD</h1>
              <p> makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
            </div>


        
              <button onClick={handletogglecard2} >SEE CARD</button>
         
        </div>

        <div className="xs100 m25 flex just_center boxcolor boxstyle flex_dir_col just_AR mb20 mt20">
            <div className={isActive3 ? "xs100 flex just_center boxcolor flex_dir_col just_AR mb20 mt20":"oculto"}>
            <h1  className="mb20">THIS IS A CARD</h1>
              <p>makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. </p>
            </div>


        
              <button onClick={handletogglecard3} >SEE CARD</button>
         
        </div>

        


      </div>

        
      
    );
}

export default Cards;