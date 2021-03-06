import React from 'react';
// eslint-disable-next-line
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const isAuth = true
    return (
        <Switch>
          {isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
          )}
          {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
          )}
        </Switch>
    );
};

export default AppRouter;
