// import "./Main.css";
// import { Parallax } from "react-parallax";
// import Woman from "../images/woman.jpg";
// import City from "../images/city.jpg";
// import Fly from "../images/fly.jpg";

// function Main() {
//   return (
//     <div className="App">
//       <Parallax strength={300} bgImage={Woman}>
//         <div className="content">
//           <div className="text-content">Normal Parallax</div>
//         </div>
//       </Parallax>

//       <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={City}>
//         <div className="content">
//           <div className="text-content">Blur</div>
//         </div>
//       </Parallax>

//       <Parallax strength={-600} bgImage={Fly}>
//         <div className="content">
//           <div className="text-content">Reverse Parallax</div>
//         </div>
//       </Parallax>

//       <div className="content"></div>
//     </div>
//   );
// }

// export default Main;

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Page1.css'



function Main() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
   
  return (
    <>
    <div className='top'>
        <h1 className='text-light'>test</h1>
    </div>
      <div className="App">
        <Parallax>
          <h2 className='textclass' data-aos="zoom-in-down">Scroll Me!!</h2>
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div class="animation_layer parallax" id="mountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.1}>
            <div class="animation_layer parallax" id="logoland"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.1}>
            <div class="animation_layer parallax" data-aos="zoom-in-left" id="jungle1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div class="animation_layer parallax" data-aos="zoom-in-right" id="jungle2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div class="animation_layer parallax" id="jungle3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45}>
            <div class="animation_layer parallax" id="jungle4"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.40}>
            <div class="animation_layer parallax" id="manonmountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div class="animation_layer parallax" id="jungle5"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25} className='textarea'>
            <section className='sec'>
              <h1 data-aos="zoom-in-left">Parallax Scrolling website</h1><p data-aos="zoom-in-right">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                 took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                 but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.popularised 

                <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting, 
                   remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum 
                    <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of
                   Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                   like Aldus PageMaker including versions of Lorem Ipsum.
                   <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of
                   Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                   like Aldus PageMaker including versions of Lorem Ipsum.





              </p>
            </section>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

export default Main
