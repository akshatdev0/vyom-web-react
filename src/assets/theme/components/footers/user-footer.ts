/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

const componentStyles = (theme: Theme) => createStyles({
  listItemRoot: {
    width: "auto",
    color: theme.palette.gray[600],
    fontSize: ".875rem",
  },
  copyrightGridRoot: {
    display: "flex",
    alignItems: "center", 
  },
  copyrightWrapper: {
    color: theme.palette.gray[600],
    fontSize: ".875rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  copyrightLink: {
    fontWeight: 600,
    marginLeft: ".25rem",
    color: theme.palette.primary.main,
    backgroundColor: "initial",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  justifyContentCenter: {
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center!important",
    },
  },
  flexDirectionColumn: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column!important",
    },
  },
});

export default componentStyles;
