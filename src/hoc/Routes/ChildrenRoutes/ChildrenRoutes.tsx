import React, { ComponentType, ReactElement } from "react";
import { Route, RouteProps, RouteComponentProps } from "react-router-dom"; // <-- New code


interface ChildrenRoutesProps extends RouteProps {
  component: ComponentType<RouteComponentProps> | ComponentType;
};

const ChildrenRoutes = (route: ChildrenRoutesProps): ReactElement => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} />}
  />
);

export default ChildrenRoutes;