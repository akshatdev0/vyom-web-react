import React, { useRef, RefObject, createContext, useContext } from 'react';

import NotificationAlert, { AlertOptions } from 'react-notification-alert';

type NotificationOptions = Omit<AlertOptions, 'type' | 'message'>;
type NotifyOptions = Pick<AlertOptions, 'type'> & {
  title: string;
  message: string;
};

const useNotification = (
  options: NotificationOptions,
): readonly [(options: NotifyOptions) => void, RefObject<NotificationAlert>] => {
  const ref = useRef<NotificationAlert>(null);
  const { place, icon, autoDismiss } = options;

  const notify = ({ type, title, message }: NotifyOptions) => {
    const options: AlertOptions = {
      place,
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {title}
          </span>
          <span data-notify="message">{message}</span>
        </div>
      ),
      type,
      icon,
      autoDismiss,
    };

    ref.current?.notificationAlert(options);
  };

  return [notify, ref] as const;
};

const NotifyContext = createContext<((options: NotifyOptions) => void) | undefined>(undefined);

type NotificationContainerProps = Partial<NotificationOptions> & {
  children: React.ReactNode;
};

const NotificationContainer = ({
  children,
  place = 'tc',
  icon = 'ni ni-bell-55',
  autoDismiss = 7,
}: NotificationContainerProps): JSX.Element => {
  const [notify, ref] = useNotification({ place, icon, autoDismiss });

  return (
    <NotifyContext.Provider value={notify}>
      <div className="rna-wrapper">
        <NotificationAlert ref={ref} />
      </div>
      {children}
    </NotifyContext.Provider>
  );
};

const useNotify = (): ((options: NotifyOptions) => void) => {
  const value = useContext(NotifyContext);

  if (!value) {
    throw new Error('No NotifyContext set');
  }

  return value;
};

export { NotificationContainer, useNotify };
