import React, { createContext, useContext, useEffect } from 'react';

import Snackbar, { SnackbarCloseReason, SnackbarOrigin } from '@material-ui/core/Snackbar';
import Alert, { Color } from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

type SnackbarsProps = {
  origin: SnackbarOrigin;
  duration?: number;
  children: React.ReactNode;
};

type SnackbarOptions = {
  title?: string | null;
  message: string;
  severity: Color;
};

const SnackbarContext = createContext<((options: SnackbarOptions) => void) | undefined>(undefined);

const Snackbars: React.FunctionComponent<SnackbarsProps> = ({ origin, duration = 7000, children }: SnackbarsProps) => {
  const [snackbars, setSnackbars] = React.useState<Array<SnackbarOptions>>([]);
  const [open, setOpen] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState<SnackbarOptions | undefined>(undefined);

  useEffect(() => {
    if (snackbars.length && !snackbar) {
      // Set a new snack when we don't have an active one
      setSnackbar({ ...snackbars[0] });
      setSnackbars((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackbars.length && snackbar && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackbars, snackbar, open]);

  const showSnackbar = (options: SnackbarOptions) => {
    setSnackbars((prev) => [...prev, options]);
  };

  const handleExited = () => {
    setSnackbar(undefined);
  };

  const handleClose = (_event: React.SyntheticEvent<Element, Event>, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setSnackbar(undefined);
  };

  const handleAlertClose = () => {
    setOpen(false);
    setSnackbar(undefined);
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      <div>
        {snackbar && (
          <Snackbar
            key={new Date().getTime()}
            anchorOrigin={origin}
            open={open}
            autoHideDuration={duration}
            onClose={handleClose}
            onExited={handleExited}
          >
            <Alert onClose={handleAlertClose} severity={snackbar.severity}>
              {snackbar.title && <AlertTitle>{snackbar.title}</AlertTitle>}
              {snackbar.message}
            </Alert>
          </Snackbar>
        )}
      </div>
      {children}
    </SnackbarContext.Provider>
  );
};

const useSnackbar = (): ((options: SnackbarOptions) => void) => {
  const value = useContext(SnackbarContext);

  if (!value) {
    throw new Error('No SnackbarContext set');
  }

  return value;
};

export default Snackbars;
export { useSnackbar };
