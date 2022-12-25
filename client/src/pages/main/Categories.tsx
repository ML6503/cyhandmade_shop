import { ShopContext } from 'index';
import { observer } from 'mobx-react-lite';
import React, { Dispatch, FC, SetStateAction, useContext } from 'react';

interface CategoriesProps {
  setCategoryName: Dispatch<SetStateAction<string>>;
}

const Categories: FC<CategoriesProps> = observer(({ setCategoryName }) => {
  const appContext = useContext(ShopContext);
  const items = appContext!.items;

  const addActiveCategory = (e: React.MouseEvent, catName: string) => {
    e.preventDefault();

    setCategoryName(catName);
  };

  return (
    <ul className="pb-4 categories-filter list-unstyled">
      <h6 className="text-uppercase fw-bold">categories</h6>
      {items.types.map((cat) => {
        const catName: string = cat.name;
        return (
          <li
            key={cat.id}
            className={cat.id === items.selectedType.id ? 'lh-sm m-0 cat-active' : 'lh-sm m-0'}
            onClick={(e) => addActiveCategory(e, catName)}
          >
            {catName}
          </li>
        );
      })}
    </ul>
  );
});

export default Categories;
