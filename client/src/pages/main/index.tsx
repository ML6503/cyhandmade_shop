import React from 'react';
import Shop from './Shop';
import Slider from './Slider';

const MainPage = () => {
  return (
    <section data-testid="main-page">
      <Slider />

      <Shop />
    </section>
  );
};

export default MainPage;
