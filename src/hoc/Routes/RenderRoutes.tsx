import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import ChildrenRoutes from './ChildrenRoutes/ChildrenRoutes';
import NotFound from '../../pages/NotFound';


interface RoutesComponentExtension {
  key: string;
  path: string;
  exact: boolean;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
};

interface RoutesProps {
  routes: Array<RoutesComponentExtension>,
};

const RenderRoutes = ({ routes }: RoutesProps) => {
  const applicationRoutes = routes.map((route) => <ChildrenRoutes {...route} key={route.key} />);
  return (
    <section>
      <Switch>
        {applicationRoutes}
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default RenderRoutes;
