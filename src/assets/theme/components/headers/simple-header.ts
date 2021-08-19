/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

const componentStyles = (theme: Theme) => createStyles({
  header: {
    position: "relative",
    backgroundColor: theme.palette.info.main,
    paddingBottom: "4.5rem",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  },
  containerRow: {
    paddingTop: "0.25rem",
    paddingBottom: "1rem",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    minHeight: "60px",
    height: "60px",
  },
  toolbarGrid: {
    "& .MuiToolbar-root": {
      justifyContent: "flex-end",
      minHeight: "60px",
      height: "60px",
    },
    "& .MuiButton-root": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.white.main,
      borderColor: theme.palette.white.main,
      display: 'inline-flex',
      fontSize: '0.825rem',
      marginLeft: theme.spacing(1),
      borderRadius: '0.25rem',
      textTransform: 'uppercase',
      "&:hover": {
        backgroundColor: theme.palette.white.main,
        borderColor: theme.palette.white.main,
        color: theme.palette.dark.main,
      },
      "& .MuiButton-startIcon": {
        marginRight: "6px",
      },
      "& .MuiSvgIcon-root": {
        width: "22px",
        height: "22px",
      }
    },
  },
  displayInlineBlock: {
    display: "inline-block",
    paddingLeft: "0.325rem",
  },
  mb0: {
    marginBottom: 0,
  },
  breadcrumbRoot: {
    display: "none",
    paddingLeft: "0.325rem",
    [theme.breakpoints.up("md")]: {
      display: "inline-block",
    },
  },
  breadcrumbOl: {
    background: "transparent",
    marginBottom: 0,
    paddingLeft: 0,
  },
  breadcrumbLi: {
    "& a": {
      color: theme.palette.gray[100],
      textDecoration: "none",
      fontWeight: 600,
      "&:hover": {
        color: theme.palette.white.main,
        textDecoration: "none",
      },
    },
  },
  breadcrumbSeparator: {
    color: theme.palette.white.main,
  },
  breadcrumbActive: {
    fontSize: ".875rem",
    color: theme.palette.white.main,
    fontWeight: 600,
  },
  textWhite: {
    color: theme.palette.white.main,
  },
});

export default componentStyles;
