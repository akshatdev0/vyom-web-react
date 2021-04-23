declare module 'react-notification-alert' {
  export interface AlertOptions {
    place: 'tl' | 'tc' | 'tr' | 'bl' | 'bc' | 'br';
    message: string | JSX.Element;
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    icon: string;
    autoDismiss: number;
  }

  declare class ReactNotificationAlert extends React.Component {
    notificationAlert(options: AlertOptions): void;
  }

  export default ReactNotificationAlert;
}
