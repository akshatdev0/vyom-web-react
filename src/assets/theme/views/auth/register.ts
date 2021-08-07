/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme: Theme) => createStyles({
  containerRoot: {
    marginTop: "-8rem",
    paddingBottom: "5rem",
    position: "relative",
    zIndex: 101
  },
  gridContainerRoot: {
    justifyContent: "center",
  },
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
    border: "0!important",
    backgroundColor: theme.palette.secondary.main,
  },
  cardHeader: {
    backgroundColor: "initial",
  },
  cardContent: {
    [theme.breakpoints.up("md")]: {
      padding: "3rem",
    },
  },
  buttonImg: {
    verticalAlign: "middle",
    borderStyle: "none",
  },
  buttonRoot: {
    backgroundColor: theme.palette.white.main,
    color: theme.palette.primary.main,
    boxShadow: boxShadows.buttonBoxShadowNeutral,
    borderColor: theme.palette.white.main + "!important",
    "&:hover": {
      color: theme.palette.gray[900],
      borderColor: theme.palette.white.main + "!important",
      backgroundColor: theme.palette.white.main,
    },
  },
  formControlLabelRoot: {
    position: "relative",
    display: "flex",
    minHeight: "1.5rem",
    WebkitPrintColorAdjust: "exact",
  },
  formControlLabelLabel: {
    cursor: "pointer",
    fontSize: ".875rem",
    position: "relative",
    verticalAlign: "top",
    display: "inline-block",
    color: theme.palette.gray[600],
  },
  footerLinks: {
    color: theme.palette.gray[400],
    textDecoration: "none",
    fontSize: "80%",
  },
});

export default componentStyles;
