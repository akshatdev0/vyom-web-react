/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

const componentStyles = (theme: Theme) => createStyles({
  alertRoot: {
    "& .MuiAlert-icon": {
      padding: "9px 0",
    },
    "& .MuiSvgIcon-root": {
      width: "1em",
      height: "1em"
    },
    "& .MuiAlertTitle-root": {
      fontWeight: 600,
    }
  },
  defaultSnackbar: {
    color: theme.palette.white.main,
    borderColor: theme.palette.dark.snackbar,
    backgroundColor: theme.palette.dark.snackbar,
  },
  primarySnackbar: {
    color: theme.palette.white.main,
    borderColor: theme.palette.primary.snackbar,
    backgroundColor: theme.palette.primary.snackbar,
  },
  secondarySnackbar: {
    color: theme.palette.gray[900],
    borderColor: theme.palette.secondary.snackbar,
    backgroundColor: theme.palette.secondary.snackbar,
  },
  infoSnackbar: {
    color: theme.palette.white.main,
    borderColor: theme.palette.info.snackbar,
    backgroundColor: theme.palette.info.snackbar,
  },
  successSnackbar: {
    color: theme.palette.white.main,
    borderColor: theme.palette.success.snackbar,
    backgroundColor: theme.palette.success.snackbar,
  },
  errorSnackbar: {
    color: theme.palette.white.main,
    borderColor: theme.palette.error.snackbar,
    backgroundColor: theme.palette.error.snackbar,
  },
  warningSnackbar: {
    color: theme.palette.white.main,
    borderColor: theme.palette.warning.snackbar,
    backgroundColor: theme.palette.warning.snackbar,
  },
});

export default componentStyles;
