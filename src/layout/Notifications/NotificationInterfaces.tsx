export enum NotificationLevelOption {
  error = 'error',
  success = 'success',
  warning = 'warning',
  info = 'info',
}

export interface NotificationStateInterface {
  message: string,
  level: NotificationLevelOption,
  show: boolean,
}

export interface NotificationContextInterface {
  showNotification: (notificationParams: NotificationStateInterface) => void,
  notificationState: NotificationStateInterface,
  closeNotification: () => void,
};
