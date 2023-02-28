import { EuroIcon } from 'pages/main/EuroIcon';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { PRODUCT_ROUTE } from 'utils/constants';
import './productStyle.css';

const Product = () => {
  const item = {
    id: 'f93a0f39-ba2f-4e6f-8fd5-8305f428ab4d',
    name: 'Steampunk style knife',
    type: 'hunting knives',
    price: 120,
    img: 'https://i.lensdump.com/i/R31ty9.jpeg',
  };

  return (
    <section className="one-product-section">
      <h4 className="product-heading ps-3">{item.name}</h4>

      <span className="one-product-img-wrapper">
        <Image src={item.img} className="one-product-img" />
      </span>
      <div className="ps-3">
        <span className="d-flex align-content-center">
          <EuroIcon />
          <p className="price p-2 fs-4 m-0">{item.price}</p>
        </span>
        <Button className="basket-btn btn btn-sm" onClick={() => {}}>
          Add to basket
        </Button>
      </div>
    </section>
  );
};

export default Product;
