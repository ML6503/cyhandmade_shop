import React, { FC } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import SharedLayer from 'pages/SharedLayer';
import { IRoute, publicRoutes } from 'components/routes';

const AppRouter: FC = (): IRoute['element'] => {
  return (
    <Routes>
      <Route key="sharedLayer" path="/" element={<SharedLayer />}>
        {publicRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
