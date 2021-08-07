/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

const componentStyles = (theme: Theme) => createStyles({
  containerRoot: {
    display: "flex!important",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: ".75rem",
  },
  buttonRootPurchase: {
    backgroundColor: theme.palette.white.main,
    borderColor: theme.palette.white.main,
    minWidth: "10.5rem",
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: theme.palette.white.main,
    },
  },
  buttonLabelPurchase: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  listRootRight: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
    },
  },
  listItemRoot: {
    display: "flex",
    alignItems: "center",
    fontSize: ".875rem",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: ".625rem",
    paddingBottom: ".625rem",
    transition: "all .15s linear",
    fontWeight: 400,
    "& i": {
      marginRight: "0.25rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: ".5rem",
      paddingLeft: ".5rem",
      paddingRight: ".5rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      color: theme.palette.authNavbarLink.dark,
      justifyContent: "center",
      "&:hover": {
        color: theme.palette.authNavbarLink.main,
      },
    },
  },
  headerImgLgUp: {
    height: "30px",
    verticalAlign: "middle",
    borderStyle: "none",
    marginRight: "1rem"
  },
  headerImg: {
    height: "36px",
    verticalAlign: "middle",
    borderStyle: "none",
  },
  menuPaper: {
    width: "calc(100% - 2rem)",
  },
  outlineNone: {
    outline: "none!important",
  },
  flexDirectionColumn: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
});

export default componentStyles;
