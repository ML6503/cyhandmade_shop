import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'pages/App';
import UserStore from 'store/UserStore';

interface IShopContext {
  user: UserStore;
}

export const shopContext = createContext<IShopContext | null>(null);

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(
    <shopContext.Provider
      value={{
        user: new UserStore(),
      }}
    >
      <App />
    </shopContext.Provider>
  );
} else {
  console.log('App not found');
}
