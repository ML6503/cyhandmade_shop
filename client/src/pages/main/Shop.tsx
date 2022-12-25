import React, { FC, useEffect, useState } from 'react';
import Categories from './Categories';

const Shop: FC = () => {
  const [categoryName, setCategoryName] = useState<string>('knives');
  const categories: string[] = ['axes', 'knives', 'hunting knives', 'other creations'];

  const filter: string[] = ['price low to high', 'price high to low', 'newest', 'oldest'];

  return (
    <div className="text-capitalize">
      <h1 className="text-center items-heading">{categoryName}</h1>
      <div className="d-flex  justify-content-around p-3 items-txt-color">
        <div className="d-flex flex-column align-items-start justify-content-center ps-5 categories-filter-txt">
          <Categories name="categories" items={categories} setCategoryName={setCategoryName} />
          <Categories name="filters" items={filter} setCategoryName={setCategoryName} />
        </div>

        <div className="d-flex flex-wrap flex-grow-1 justify-content-around">
          <div>Shop colm one</div>
          <div>Shop colm two</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
