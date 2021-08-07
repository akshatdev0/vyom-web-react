/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

const componentStyles = (theme: Theme) => createStyles({
  header: {
    background:
      "linear-gradient(87deg," + theme.palette.info.main + ",#1171ef)",
    [theme.breakpoints.up("md")]: {
      paddingTop: "10rem",
    },
  },
  gridContainer: {
    color: theme.palette.white.main,
    justifyContent: "center",
  },
  backdropContainer: {
    transform: "translateZ(0)",
  },
  backdrop: {
    position: "absolute",
    bottom: "0",
  }
});

export default componentStyles;
