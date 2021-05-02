import React from "react";
import { Route, RouteProps, RouteComponentProps } from "react-router-dom"; // <-- New code


interface ChildrenRoutesProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
};

const ChildrenRoutes = (route: ChildrenRoutesProps) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} />}
  />
);

export default ChildrenRoutes;