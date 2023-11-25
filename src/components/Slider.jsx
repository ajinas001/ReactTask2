import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const slideImages = [
  {
    url:  "https://source.unsplash.com/800x600/?nature",

    caption: 'Caption for Image 1',
  },
  {
    url:  "https://source.unsplash.com/800x600/?culture",
    caption: 'Caption for Image 2',
  },
  // Add more image objects as needed
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '400px',
  justifyContent: 'center',
  backgroundSize: 'cover',
  width : '600px',
 
};

const spanStyle = {
  fontSize: '20px',
  background: '#efefef',
  color: '#000000',
};

function Slidercomp() {
  return (
    <>
      <div className='slide-container'>
        <Fade>
          {slideImages.map((image, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
                <span style={spanStyle}>{image.caption}</span>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </>
  );
}

export default Slidercomp;
