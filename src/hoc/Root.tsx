import React from "react";
import { Router } from "react-router-dom";
import Container from '@material-ui/core/Container';

import routes from '../config/routes';
import RenderRoutes from './Routes/RenderRoutes';
import history from '../config/history';
import ErrorBoundary from './ErrorBoundary';
import TopBar from '../components/topBar/TopBar';

const Root = (): JSX.Element => {
  return (
    <main>
      <ErrorBoundary>
        <TopBar />
        <Container fixed>
          <Router history={history}>
            <RenderRoutes routes={routes} />
          </Router>
        </Container>
      </ErrorBoundary>
    </main>
  );
}

export default Root;
