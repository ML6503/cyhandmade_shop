import { ShopContext } from 'index';
import { observer } from 'mobx-react-lite';
import React, { Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { KnifeIcon } from './KnifeIcon';

interface CategoriesProps {
  setCategoryName: Dispatch<SetStateAction<string>>;
}

const Categories: FC<CategoriesProps> = observer(({ setCategoryName }) => {
  const appContext = useContext(ShopContext);
  const items = appContext!.items;
  const [activeCatId, setActiveCatId] = useState(0);

  const addActiveCategory = (e: React.MouseEvent, catName: string, i: number) => {
    e.preventDefault();
    setActiveCatId(i);
    setCategoryName(catName);
  };

  return (
    <ListGroup className="pb-4 categories-filter list-unstyled">
      <h6 className="text-uppercase fw-bold">categories</h6>
      {items.types.map((cat, i) => {
        const catName: string = cat.name;
        console.log('cat.id', cat.id);
        console.log('selectedTypeId', items.selectedType.id);
        return (
          <li
            key={cat.id}
            className={i === activeCatId ? 'lh-sm m-0 cat-active' : 'lh-sm m-0'}
            onClick={(e) => addActiveCategory(e, catName, i)}
          >
            {i === activeCatId && <KnifeIcon />}
            {catName}
          </li>
        );
      })}
    </ListGroup>
  );
});

export default Categories;
