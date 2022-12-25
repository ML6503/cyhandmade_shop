import React, { Dispatch, FC, SetStateAction, useState } from 'react';
interface CategoriesProps {
  name: string;
}

const Filter: FC = () => {
  const filters: string[] = ['price low to high', 'price high to low', 'newest', 'oldest'];
  const initialState = 2;
  const [activeIndex, setActiveIndex] = useState<number | null>(initialState);

  const addActiveCategory = (e: React.MouseEvent, i: number) => {
    e.preventDefault();

    setActiveIndex(i);
  };

  return (
    <ul className="pb-4 categories-filter list-unstyled">
      <h6 className="text-uppercase fw-bold">filter</h6>
      {filters.map((filter, i) => (
        <li
          key={i}
          className={activeIndex === i ? 'lh-sm m-0 cat-active' : 'lh-sm m-0'}
          onClick={(e) => addActiveCategory(e, i)}
        >
          {filter}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
