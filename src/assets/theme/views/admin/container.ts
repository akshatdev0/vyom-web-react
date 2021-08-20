/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

const componentStyles = (theme: Theme) => createStyles({
  containerRoot: {
    display: "flex",
    marginTop: "-4.5rem",
    [theme.breakpoints.up("md")]: {
      minHeight: "calc(100vh - 230px)",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  },
  cardRoot: {
    flexGrow: 1,
    marginBottom: "10px",
  },
  paperRoot: {
    flexGrow: 1,
    marginBottom: "10px",
    position: "relative",
    borderRadius: "0.375rem",
  },
});

export default componentStyles;
