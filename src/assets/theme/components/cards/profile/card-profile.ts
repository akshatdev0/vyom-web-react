/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme: Theme) => createStyles({
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
    border: "0!important",
  },
  cardHeaderRoot: {
    backgroundColor: theme.palette.white.main + "!important",
  },
  typographyRootH6: {
    textTransform: "uppercase",
  },
  cardContentRoot: {
    paddingTop: "0!important",
  },
  cardHeaderRootProfile: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "1.5rem!important",
      paddingTop: "1.5rem!important",
    },
  },
  buttonRootInfo: {
    color: theme.palette.white.main,
    backgroundColor: theme.palette.info.main,
    borderColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
      borderColor: theme.palette.info.dark,
    },
  },
  buttonRootDark: {
    color: theme.palette.white.main,
    backgroundColor: theme.palette.dark.main,
    "&:hover": {
      backgroundColor: theme.palette.dark.dark,
    },
  },
  profileImage: {
    verticalAlign: "middle",
    transform: "translate(-50%,-50%) scale(1)",
    transition: "all .15s ease",
    "&:hover": {
      transform: "translate(-50%,-50%) scale(1.03)",
    },
    maxWidth: "140px",
    borderRadius: "50%",
    position: "absolute",
    left: "50%",
    border: "3px solid " + theme.palette.white.main,
    boxShadow: boxShadows.boxShadow + "!important",        
  },
});

export default componentStyles;
