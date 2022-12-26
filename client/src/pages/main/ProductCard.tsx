import { ShopContext } from 'index';
import React, { FC } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { IItem } from '../../utils/interfaces';

interface ProductCardProps {
  item: IItem;
}

// TODO!! small screen viewport
const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <Col md={3} className="col-6 col-md-2 flex-shrink">
      <Card className="product-card bg-transparent">
        <Image src={item.img} className="product-img card-img-top" alt={item.name} />
        <div className="card-body">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <Button className="btn btn-warning btn-sm">view product</Button>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
