import React, { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './mainStyles.css';
import RectangleSign from './RectangleSign';

const sliderImages = [
  { link: 'https://i3.lensdump.com/i/R3Oo4C.jpeg', description: 'Slide with chopper knife' },
  { link: 'https://i1.lensdump.com/i/R31reo.jpeg', description: 'Slide with hunting knife' },
  {
    link: 'https://i.lensdump.com/i/R31ty9.jpeg',
    description: 'Slide with custom steampunk style knife',
  },
];

const Slider: FC = () => {
  return (
    <div className="d-flex">
      <Carousel fade className="d-flex carousel-img-container">
        {sliderImages.map((i) => (
          <Carousel.Item key={i.link} className="w-80 carousel-img-wrapper">
            <img className=" w-100 carousel-img" src={i.link} alt={i.description} />
          </Carousel.Item>
        ))}
      </Carousel>
      <RectangleSign />
    </div>
  );
};

export default Slider;
