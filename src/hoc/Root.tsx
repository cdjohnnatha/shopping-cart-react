import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from '@material-ui/core/Container';

import routes from '../config/routes';
import RenderRoutes from './Routes/RenderRoutes';
// import history from '../config/history';
import ErrorBoundary from './ErrorBoundary';
import TopBar from '../layout/TopBar/TopBar';
import { CartProvider } from '../pages/Cart/context/CartContext';
import { NotificationProvider } from '../layout/Notifications/NotificationContext';
// import { NotificationAlert } from '../layout/Notifications/components/NotificationAlert';

const Root = (): JSX.Element => {
  return (
    <main>
      <ErrorBoundary>
        <NotificationProvider>
          <CartProvider>
            <Router>
              <TopBar />
              <Container fixed>
                <RenderRoutes routes={routes} />
              </Container>
            </Router>
          </CartProvider>
        </NotificationProvider>
      </ErrorBoundary>
    </main>
  );
}

export default Root;
