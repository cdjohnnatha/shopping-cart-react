import React from "react";
import { Router } from "react-router-dom";
import Container from '@material-ui/core/Container';

import routes from '../config/routes';
import RenderRoutes from './Routes/RenderRoutes';
import history from '../config/history';
import ErrorBoundary from './ErrorBoundary';
import TopBar from '../layout/TopBar/TopBar';
import { CartProvider } from '../pages/Cart/context/CartContext';

const Root = (): JSX.Element => {
  return (
    <main>
      <ErrorBoundary>
        <CartProvider>
          <TopBar />
          <Container fixed>
            <Router history={history}>
              <RenderRoutes routes={routes} />
            </Router>
          </Container>
        </CartProvider>
      </ErrorBoundary>
    </main>
  );
}

export default Root;
