import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './mainStyles.css';

const Slider = () => {
  return (
    <Carousel fade className="py-5">
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          //   src="https://photos.app.goo.gl/jLT4s1yvbyMvsnRe8"
          //   src="https://lh3.googleusercontent.com/pw/AL9nZEVPj4wyaLPWvc0Hp4exBcvUIt1icql8vpogwIGLy-vn2Ga7pBH9o6yZjDu__WUSAy1In4ZJVlEthpBnu4JACJqTKajivha8u7Iy82vJfVwggIon9pssptmlJ34ZBlXya4WRoYEVrlMwKBIaluUe9dU=w1506-h671-no?authuser=0"
          src="../../../public/images/chopper.png"
          //   alt="Slide with chopper knife"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://photos.app.goo.gl/h7USejUvvNt1iM9ZA"
          //   alt="Slide with hunting knife"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://photos.app.goo.gl/ptqjh1xdq6y3HMEC8"
          //   alt="Slide with custom steampunk style knife"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
