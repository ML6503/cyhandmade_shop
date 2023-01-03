import Logo from 'components/Logo';
import React from 'react';
import FBIcon from './FBIcon';
import './footerStyle.css';
import WAppIcon from './WAppIcon';

const footerNavs: String[] = ['PRODUCTS', 'CARE', 'BASKET', 'ACCOUNT', 'PRIVACY POLICY'];

const Footer = () => {
  return (
    <section className="container-fluid p-0">
      <div className="d-flex justify-content-between align-items-center footer-wrapper px-5">
        <div className="d-flex justify-content-between contacts-navs-wrapper">
          <div className=" d-flex flex-column justify-content-around align-items-center">
            <div>
              <p>+357 99 944 238</p>
              <p className="fw-normal">bavtra@yahoo.com</p>
              <span>
                <FBIcon />
                <WAppIcon />
              </span>
            </div>
          </div>
          <div className="d-flex flex-column fw-normal navs-wrapper">
            {footerNavs.map((nav) => (
              <p>{nav}</p>
            ))}
          </div>
        </div>
        <div className="logo-wrapper align-self-center">
          <Logo />
        </div>
      </div>
      <div className="w-100">Footer</div>
    </section>
  );
};

export default Footer;
