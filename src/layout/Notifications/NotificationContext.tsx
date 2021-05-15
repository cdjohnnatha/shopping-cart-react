import React, { createContext, useState } from 'react';
import {
  NotificationContextInterface,
  NotificationLevelOption,
  NotificationStateInterface,
} from './NotificationInterfaces';
import { NotificationAlert } from './components/NotificationAlert';

interface NotifcationProviderProps {
  children: React.PropsWithChildren<React.ReactNode>,
}

const initialNotificationState: NotificationStateInterface = {
  message: '',
  show: false,
  level: 'DEFAULT' as NotificationLevelOption
}

export const NotificationContext = createContext<NotificationContextInterface>({} as NotificationContextInterface);

export const NotificationProvider = (props: NotifcationProviderProps): JSX.Element => {
  const [notificationState, setNotificationState] = useState<NotificationStateInterface>(initialNotificationState);

  const showNotification = (notificationParams: NotificationStateInterface) => {
    setNotificationState({ ...notificationState, ...notificationParams });
  }
  
  const closeNotification = () => {
    setNotificationState({ ...notificationState, show: false });
  }

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        notificationState,
        closeNotification
      }}
    >
      <NotificationAlert />
      {props.children}
    </NotificationContext.Provider>
  )
}
