import React, { Dispatch, FC, SetStateAction, useState } from 'react';
interface CategoriesProps {
  name: string;
  items: string[];
  setCategoryName: Dispatch<SetStateAction<string>>;
}

const Categories: FC<CategoriesProps> = ({ name, items, setCategoryName }) => {
  const initialState = name === 'categories' ? 1 : 2;
  const [activeIndex, setActiveIndex] = useState<number | null>(initialState);

  const addActiveCategory = (e: React.MouseEvent, i: number, cat: string) => {
    e.preventDefault();

    setActiveIndex(i);
    setCategoryName(cat);
  };

  return (
    <ul className="pb-4 categories-filter list-unstyled">
      <h6 className="text-uppercase fw-bold">{name}</h6>
      {items.map((cat, i) => (
        <li
          key={i}
          className={activeIndex === i ? 'lh-sm m-0 cat-active' : 'lh-sm m-0'}
          onClick={(e) => addActiveCategory(e, i, cat)}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
