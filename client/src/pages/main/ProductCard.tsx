import { ShopContext } from 'index';
import React, { FC } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from 'utils/constants';
import { IItem } from '../../utils/interfaces';
import { EuroIcon } from './EuroIcon';
interface ProductCardProps {
  item: IItem;
}

// TODO!! small screen viewport
const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    // <Col xs={12} sm={6} md={6} xl={4} className="flex-shrink align-self-center">
    <Card className="product-card bg-transparent mb-3">
      <Image src={item.img} className="product-img card-img-top " alt={item.name} />
      <div className="card-body">
        <p className="mb-0">{item.name}</p>
        <div className="product-card-border">
          <span className="d-flex align-content-center">
            <EuroIcon />
            <p className="p-2 fs-4 m-0">{item.price}</p>
          </span>
          <Button
            className="product-btn btn btn-warning btn-sm"
            onClick={() => navigate(PRODUCT_ROUTE + '/' + item.id)}
          >
            view product
          </Button>
        </div>
      </div>
    </Card>
    // </Col>
  );
};

export default ProductCard;
