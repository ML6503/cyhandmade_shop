import React, { FC, useContext, useEffect, useState } from 'react';
import Categories from './Categories';
import { ShopContext } from 'index';
import Filter from './Filter';

const Shop: FC = () => {
  const appContext = useContext(ShopContext);
  const initialCategory = appContext?.items.selectedType ? appContext.items.selectedType.name : '';
  const [categoryName, setCategoryName] = useState<string>(initialCategory);

  useEffect(() => {
    const anchor = window.location.hash.split('#')[1];
    console.log('Anchor', anchor);
    if (anchor) {
      const anchorEl = document.getElementById(anchor);
      if (anchorEl) {
        anchorEl.scrollIntoView();
      }
    }
  }, []);

  return (
    <div id="products" className="text-capitalize">
      <h1 className="text-center items-heading">{categoryName}</h1>
      <div className="d-flex  justify-content-around p-3 items-txt-color">
        <div className="d-flex flex-column align-items-start justify-content-center ps-5 categories-filter-txt">
          <Categories setCategoryName={setCategoryName} />
          <Filter />
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
