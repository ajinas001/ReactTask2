import React from 'react'
import './Sliderimage.css'

function Sliderimage() {
  return (
    <>
      <section className='slidercontainer'>
        <div className='slider-wrapper'>
            <div className='slider'>
                <img id='slide-1' src="../images/newbg.png" alt='#'></img>
                <img id='slide-2' src='./images/tree-left.png' alt='###'></img>
                <img id='slide-3' src='./images/tree-right.png' alt='###'></img>
                <img id='slide-4' src='./images/gate-left.png' alt='###'></img>
                <img id='slide-5' src='./images/gate-right.png' alt='###'></img>
                <img id='slide-6' src='./images/grass.png' alt='###'></img>
            </div>
            <div className='slider-nav'>
                <a href='#slide-1'></a>
                <a href='#slide-2'></a>
                <a href='#slide-3'></a>
                <a href='#slide-4'></a>
                <a href='#slide-5'></a>
                <a href='#slide-6'></a>
            </div>
        </div>
      </section>
    </>
  )
}

export default Sliderimage
