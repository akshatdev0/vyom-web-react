/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

const componentStyles = (theme: Theme) => createStyles({
  wrapperBox: {
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundImage:
      "url(" + require("assets/img/theme/profile-cover.jpg").default + ")",
  },
  overlayBox: {
    transition: "all .15s ease",
    opacity: ".9",
    background:
      "linear-gradient(87deg," + theme.palette.info.main + ",#1171ef)",
  },
  containerRoot: {
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
    display: "flex",
    alignItems: "center",
  },
  typographyRootH1: {
    color: theme.palette.white.main,
    fontSize: "2.75rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  buttonRoot: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.white.main,
    borderColor: theme.palette.white.main,
    "&:hover": {
      backgroundColor: theme.palette.white.main,
      borderColor: theme.palette.white.main,
      color: theme.palette.dark.main,
    },
  },
});

export default componentStyles;
