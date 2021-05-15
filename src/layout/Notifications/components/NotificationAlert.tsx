import React, { useContext } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { NotificationLevelOption } from '../NotificationInterfaces';
import { NotificationContext } from '../NotificationContext';

interface NotificationAlertProps {
  level: NotificationLevelOption,
  message: string,
  show: boolean,
}

const TWO_SECONDS = 1500;

export const NotificationAlert = (): JSX.Element => {
  const { closeNotification, notificationState } = useContext(NotificationContext);
  const levelTitle = notificationState.level.charAt(0).toUpperCase() + notificationState.level.slice(1);

  return (
    <Snackbar
      open={notificationState.show}
      autoHideDuration={TWO_SECONDS}
      onClose={closeNotification}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={closeNotification} severity={notificationState.level}>
        <AlertTitle>{levelTitle}</AlertTitle>
        {notificationState.message}
      </Alert>
    </Snackbar>

  )
}
