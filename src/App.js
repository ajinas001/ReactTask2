import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import ImageSlider from './components/Parallax';

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