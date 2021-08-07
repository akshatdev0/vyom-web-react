/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

const componentStyles = (theme: Theme) => createStyles({
  header: {
    position: "relative",
    paddingBottom: "4.5rem",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  },
  buttonRoot: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.white.main,
    borderColor: theme.palette.white.main,
    "&:first-of-type": { marginRight: ".75rem" },
    "&:hover": {
      backgroundColor: theme.palette.white.main,
      borderColor: theme.palette.white.main,
      color: theme.palette.dark.main,
    },
  },
  displayInlineBlock: {
    display: "inline-block",
  },
  mb0: {
    marginBottom: 0,
  },
  breadcrumbRoot: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      marginLeft: "1.5rem",
      display: "inline-block",
    },
  },
  breadcrumbOl: {
    background: "transparent",
    marginBottom: 0,
  },
  breadcrumbLi: {
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      fontWeight: 600,
      "&:hover": {
        color: theme.palette.primary.dark,
        textDecoration: "none",
      },
    },
  },
  breadcrumbSeparator: {
    color: theme.palette.gray[500],
  },
  breadcrumbActive: {
    fontSize: ".875rem",
    color: theme.palette.gray[600],
    fontWeight: 600,
  },
});

export default componentStyles;