import React, { ReactNode } from "react";
import { Router } from "react-router-dom";

import routes from '../config/routes';
import RenderRoutes from './Routes/RenderRoutes';
import history from '../config/history';
import ErrorBoundary from './ErrorBoundary';

const Root = () => {
  return (
    <React.StrictMode>
      <main>
        <ErrorBoundary>
          <Router history={history}>
            <RenderRoutes routes={routes} />
          </Router>
        </ErrorBoundary>
      </main>
    </React.StrictMode>
  );
}

export default Root;
