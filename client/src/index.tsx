import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'pages/App';
import UserStore from 'store/UserStore';
import ItemStore from 'store/ItemStore';

interface IShopContext {
  user: UserStore;
  items: ItemStore;
}

export const ShopContext = createContext<IShopContext | null>(null);

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(
    <ShopContext.Provider
      value={{
        user: new UserStore(),
        items: new ItemStore(),
      }}
    >
      <App />
    </ShopContext.Provider>
  );
} else {
  console.log('App not found');
}
