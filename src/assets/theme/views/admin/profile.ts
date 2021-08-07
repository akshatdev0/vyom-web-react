/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme: Theme) => createStyles({
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
    border: "0!important",
  },
  cardRootSecondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  cardHeaderRoot: {
    backgroundColor: theme.palette.white.main + "!important",
  },
  cardHeaderGrid: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardActionsRoot: {
    paddingBottom: "1.5rem!important",
    paddingTop: "1.5rem!important",
    borderTop: "0!important",
    justifyContent: "flex-end",
  },
  containerRoot: {
    marginTop: "-4.5rem",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  },
  gridItemRoot: {
    [theme.breakpoints.up("xl")]: {
      marginBottom: "0!important",
    },
  },
  typographyRootH6: {
    fontSize: ".75rem!important",
    letterSpacing: ".04em",
    color: theme.palette.gray[600] + '!important',
    textTransform: "uppercase",
  },
  ptMd4: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1.5rem!important",
    },
  },
  mtMd5: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: "3rem!important",
    },
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
  },
  cardProfileLink: {
    color: theme.palette.primary.main,
    backgroundColor: "initial",
    textDecoration: "none",
    fontSize: "1rem",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  order1: {
    [theme.breakpoints.down("lg")]: {
      order: "1!important",
    },
  },
  order2: {
    [theme.breakpoints.down("lg")]: {
      order: "2!important",
    },
  },
  marginBottomXl0: {
    [theme.breakpoints.up("lg")]: {
      marginBottom: "0!important",
    },
  },
});

export default componentStyles;
