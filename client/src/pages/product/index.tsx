import React from 'react';
import { Image } from 'react-bootstrap';
import './productStyle.css';

const Product = () => {
  return (
    <section className="one-product-section">
      <span>
        <h3 className="product-heading">Product description</h3>
      </span>
      <span className="one-product-img-wrapper">
        <Image />
      </span>
    </section>
  );
};

export default Product;
