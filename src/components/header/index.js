import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isActive,setactive]=useState(false);
  const handletoggle = () =>{
    setactive(!isActive);
    
  }

  


  return(
    <div>
    <header className="App-header">
          <div className="xs100 flex just_center  panelcolor menu">
            <div className="centrado just_SB">

              <ul className="xs100 flex just_center just_SB mcol">

                  <li className={isActive ? "btn mhb icon" : "btn mhb icon"} onClick={handletoggle}>
                  <a>
                  {isActive ? <FontAwesomeIcon icon={faTimes} />: <FontAwesomeIcon icon={faBars} />  }
                
                  </a>

                  </li>

                  <li className={isActive ? "item flex":"item mh"}><a href="http://localhost:3000/">CSS LAYOUT</a></li>

                  <li className={isActive ? "item flex":"item mh"}><a href="http://localhost:3000/">CSS LAYOUT</a></li>
                  
                  <li className={isActive ? "item flex":"item mh"}><a href="http://localhost:3000/">CSS </a></li>

                  <li className={isActive ? "item flex":"item mh"}><a href="http://localhost:3000/">CSS LAYOUT</a></li>

                  <li className={isActive ? "item flex":"item mh"}><a href="http://localhost:3000/">CSS LAYOUT</a></li>

                  

              </ul>

            </div>
          
          </div>
      </header>
    </div>
  );
    
  }
  export default Header;