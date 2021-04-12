import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Home from '@/containers/Home';
import NotFound from '@/containers/NotFound';

const HomeRouter = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={url} component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default HomeRouter;
