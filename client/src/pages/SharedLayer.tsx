import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from 'components/footer';

const SharedLayer = () => {
  return (
    <div data-testid="shared-layer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayer;
