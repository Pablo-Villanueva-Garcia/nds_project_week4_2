import React from 'react';
import Cards1 from '../Cards/Card1';
import Cards2 from '../Cards/Card2';
import Cards3 from '../Cards/Card3';

import './Cardcontainer.css';

const Cardscontainer = () => {
  return(
    <div className="xs100 flex just_center panelbox ali_center">
        <div className="centrado mffrw just_SB flex_dir_col">
        <Cards1/>
       <Cards2/>
       <Cards3/>
        </div>

      
    </div>
  );
    
  }
  export default Cardscontainer;