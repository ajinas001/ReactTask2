
import React, { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';


function App() {
  return (

    <>
   

      <Navbar />
    

<div className='container'>
  <div className='row'>
    <div className='col-lg12'>
     <Page1/>
    
    </div>
  </div>
</div>



    


    </>


  );
}

export default App;