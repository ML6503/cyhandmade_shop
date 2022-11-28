import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'pages/App';
import UserStore from 'store/UserStore';

export const userContext = createContext(null as null | { user: UserStore });

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(
    <userContext.Provider
      value={{
        user: new UserStore(),
      }}
    >
      <App />
    </userContext.Provider>
  );
} else {
  console.log('App not found');
}
