import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './mainStyles.css';

const SLIDER_IMAGES = [
  { link: './images/chopper.png', description: 'Slide with chopper knife' },
  { link: 'https://photos.app.goo.gl/dWaYBVpiRhGhDDod7', description: 'Slide with hunting knife' },
  {
    link: 'https://photos.app.goo.gl/QRL6QbhcJbTohcYUA',
    description: 'Slide with custom steampunk style knife',
  },
];

const Slider = () => {
  return (
    <Carousel fade className="d-flex carousel-img-container">
      <Carousel.Item>
        <img
          className=" w-100 h-100 carousel-img"
          src="https://i1.lensdump.com/i/R31RT2.png"
          // src="https://lh3.googleusercontent.com/eaL8lF3oTwF_7mFg3m604TqCyXA_PY5DdMz-oxD-U1QlkzQ2lX-Hz_Xor0L0CJsmejxsBoZCLjShpXUxn0q6wvc0z3Eo0DXvc1HX7fbM-chDrSRKmcgu-kyeZdIW6lkR37oeE9G8=w1920-h1080"
          // src="./images/chopper.png"
          alt="Slide with chopper knife"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block w-100 h-100"
          className=" w-100 carousel-img"
          // src="https://lh3.googleusercontent.com/OHto4A3IABdnG2yOTJV8gHFAhUjNGspyAhcz309aDxymnx3kxdxaRoNhZmQa1E0nZsyklSbEhUXhbu37b6RLHsm2zjIYjweII5rJz72glA-19mSGOLnzscRTGz0BHL30LDcDmHz_=w1920-h1080"
          src="https://i1.lensdump.com/i/R31reo.jpeg"
          alt="Slide with hunting knife"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 h-100 carousel-img"
          // src="https://lh3.googleusercontent.com/ttfPvFMz1GcAAQ916psDMkuexw1oKrD_tGtkDONEYs_gbnT7r845YiitTTWxx_cQpStfj8DYhqJiOEWko1yp2Bc9fmQg7QmsaHEP6uhDsvYexcZgPktincZ-M7HknmFw3u-b6z_U=w1920-h1080"
          src="https://i.lensdump.com/i/R31ty9.jpeg"
          alt="Slide with custom steampunk style knife"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
