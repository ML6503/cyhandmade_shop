import { ShopContext } from 'index';
import React, { FC } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { IItem } from '../../utils/interfaces';
import { EuroIcon } from './EuroIcon';
interface ProductCardProps {
  item: IItem;
}

// TODO!! small screen viewport
const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    // <Col xs={12} sm={6} md={6} xl={4} className="flex-shrink align-self-center">
    <Card className="product-card bg-transparent mb-3">
      <Image src={item.img} className="product-img card-img-top " alt={item.name} />
      <div className="card-body">
        <p>{item.name}</p>
        <span className="d-flex align-content-center">
          <EuroIcon />
          <p className="p-2 m-0">{item.price}</p>
        </span>
        <Button className="btn btn-warning btn-sm">view product</Button>
      </div>
    </Card>
    // </Col>
  );
};

export default ProductCard;
