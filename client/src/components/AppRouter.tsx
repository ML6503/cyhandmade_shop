import React, { FC, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayer from 'pages/SharedLayer';
import { authRoutes, IRoute, publicRoutes } from 'components/routes';
import { MAIN_ROUTE } from 'utils/constants';
import { userContext } from 'index';

const AppRouter: FC = (): IRoute['element'] => {
  const contextUser = useContext(userContext);
  // const isAuth = true;
  const allRoutes = publicRoutes.concat(authRoutes);
  const routes = contextUser?.user.isAuth ? allRoutes : publicRoutes;

  return (
    <Routes>
      <Route key="sharedLayer" path={MAIN_ROUTE} element={<SharedLayer />}>
        {routes.map((r) => {
          return <Route key={r.path} path={r.path} element={r.element} />;
        })}

        <Route path="*" element={<Navigate replace to={MAIN_ROUTE} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
