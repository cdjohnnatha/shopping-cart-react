import React from "react";
import { Router } from "react-router-dom";

import routes from '../config/routes';
import RenderRoutes from './Routes/RenderRoutes';
import history from '../config/history';

const Root = () => {
  return (
    <React.StrictMode>
      <Router history={history}>
        <RenderRoutes routes={routes} />
      </Router>
    </React.StrictMode>
  );
}

export default Root;
