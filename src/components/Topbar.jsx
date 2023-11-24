import React from 'react'
import './Topbar.css'

function Topbar() {
  return (
    <>
      <div className='div1' >
        <header>
            <h2 className='logo'>
                 logo
            </h2>
            <nav classname='navigation'>
                <a className='navbaritems' href='#'>Home</a>
                <a className='navbaritems'href='#'>About</a>
                <a className='navbaritems'href='#'>contact</a>
                <a className='navbaritems'href='#'>Service</a>
            </nav>


        </header>

        <section className='parallax'>
            <h2 id='text'>
                parallax website
                
            </h2>
            <img src='/images/jungle1.png' id='jungle1'></img>
            <img src='/images/jungle2.png' id='jungle2'></img>
            <img src='/images/jungle3.png' id='jungle3'></img>
            <img src='/images/jungle4.png' id='jungle4'></img>
            <img src='/images/jungle5.png' id='jungle5'></img>
            <img src='/images/jungle6.png' id='jungle6'></img>
            <img src='/images/jungle7.png' id='jungle'></img>

        </section>
      </div>

      
    </>
  )
}

export default Topbar
