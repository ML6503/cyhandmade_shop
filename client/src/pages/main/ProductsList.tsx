import { ShopContext } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductsList = observer(() => {
  const shopContext = useContext(ShopContext);

  return (
    <Row className="d-flex justify-content-around w-100 ">
      {shopContext?.items.items.map((product) => (
        <ProductCard item={product} />
      ))}
    </Row>
  );
});

export default ProductsList;
