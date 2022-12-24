import React, { FC } from 'react';

const RectangleSign: FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-end rectangle-sign">
      <span className="px-3 welcome-txt-wrapper">
        <p className="p-0 m-0 shop-name-txt">HANDMADE</p>
        <p className="p-0 shop-name-txt">CYPRUS</p>
        <p className="p-0 welcome-txt">Welcomes you</p>
        <p className="p-0 welcome-txt welcome-txt-world">to the sharp world</p>
      </span>
    </div>
  );
};

export default RectangleSign;
