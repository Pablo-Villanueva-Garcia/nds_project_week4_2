import React from 'react';
import Header from './components/header';
import CardContainer from './components/CardContainer';
import Footer from './components/footer';
import './reset.css';
import './estructura.css';

function App() {
  return (
    <div className="App">

      <Header/> 
      <CardContainer/>
      <Footer/>
     
    </div>
  );
}

export default App;
