/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

import boxShadows from "assets/theme/box-shadow.js";
import hexToRgb from "assets/theme/hex-to-rgb.js";

const componentStyles = (theme: Theme) => createStyles({
  cardRoot: {
    flexGrow: 1,
    boxShadow: boxShadows.boxShadow + "!important",
    marginBottom: "10px",
  },
  cardRootTranslucent: {
    backgroundColor: theme.palette.transparent.main,
  },
  cardRootStripped: {
    "& tbody tr:nth-child(odd)": {
      backgroundColor: "rgba(" + hexToRgb(theme.palette.gray[100]) + ", 0.3)",
    },
  },
  cardRootCheckboxColors: {
    "& tbody tr:nth-child(1)": {
      backgroundColor: theme.palette.success.tableLight,
      "&:hover": {
        backgroundColor: theme.palette.success.tableLightHover,
      },
    },
    "& tbody tr:nth-child(3)": {
      backgroundColor: theme.palette.warning.tableLight,
      "&:hover": {
        backgroundColor: theme.palette.warning.tableLightHover,
      },
    },
  },
  cardRootDark: {
    backgroundColor: theme.palette.dark.main,
    "& *": {
      color: theme.palette.white.main,
    },
    "& $tableCellRoot, & $tableRoot": {
      color: theme.palette.white.main,
      borderColor: theme.palette.dark.tableBorder,
    },
    "& $tableCellRootHead": {
      color: theme.palette.dark.tableHeadColor,
      backgroundColor: theme.palette.dark.tableHeadBgColor,
    },
  },
  cardHeader: {
    backgroundColor: "initial",
    height: "66px!important"
  },
  cardActionsRoot: {
    height: "70px!important",
    paddingBottom: "0.75rem!important",
    paddingTop: "0.75rem!important",
    borderTop: "0!important",
    justifyContent: "space-between",
    "& .MuiPaginationItem-ellipsis": {
      border: "none",
    },
    "& .MuiPaginationItem-ellipsis:hover": {
      backgroundColor: theme.palette.transparent.main,
    },
  },
  containerRoot: {
    display: "flex",
    marginTop: "-4.5rem",
    [theme.breakpoints.up("md")]: {
      minHeight: "calc(100vh - 230px)",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  },
  tableOverlay: {
    display: 'flex',
    position: 'absolute',
    top: "120px",
    left: 0,
    right: 0,
    bottom: "90px",
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    "& .MuiLinearProgress-root": {
      height: "4px",
      borderRadius: "0px",
    },
  },  
  tableContainerRoot: {
    height: "calc(100vh - 375px)",
  },
  tableRoot: {
    marginBottom: "0!important",
  },
  tableElement: {
    alignItems: "center",
    marginBottom: "0!important",
  },
  tableFooter: {
    fontSize: ".875rem",
    whiteSpace: "nowrap",
    "& label": {
      marginBottom: 0,
    }
  },
  tableFooterSelect: {
    height: "calc(1.8125rem + 6px)",
    margin: "0 .375rem",
  },
  "@supports ( -moz-appearance:none )": {
    tableFooter: {
      marginTop: "-19px",
    },
    tableFooterSelect: {
      top: "10px",
    },
  },
  tableCellRoot: {
    verticalAlign: "middle",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    borderTop: "0",
  },
  tableCellRootHead: {
    backgroundColor: theme.palette.gray[100],
    color: theme.palette.gray[600],
    height: "55px!important",
    fontSize: "0.7125rem",
  },
  tableCellRootBodyHead: {
    textTransform: "unset!important" as "unset",
    fontSize: ".85rem",
  },
  tableLabel: {},
  tableSortLabel: {
    '& svg': {
      width: 14,
      height: 14,
      marginTop: 0,
      marginLeft: 4,
    },
  },
  headerIcon: {
    '& svg': {
      width: 16,
      height: 16,
      marginTop: 4,
      marginRight: 0,
    },
  },  
  expanderIcon: {
    '& svg': {
      width: 16,
      height: 16,
      marginTop: 0,
      marginRight: 0,
      position: "relative",
      top: "-1px",
      left: "-4px",
    },
  },  
  linearProgressRoot: {
    height: "3px!important",
    width: "120px!important",
    margin: "0!important",
  },
  bgGradientError: {
    background:
      "linear-gradient(87deg," +
      theme.palette.error.main +
      ",#f56036)!important",
  },
  bgGradientSuccess: {
    background:
      "linear-gradient(87deg," +
      theme.palette.success.main +
      ",#2dcecc)!important",
  },
  bgGradientPrimary: {
    background:
      "linear-gradient(87deg," +
      theme.palette.primary.main +
      ",#825ee4)!important",
  },
  bgGradientInfo: {
    background:
      "linear-gradient(87deg," +
      theme.palette.info.main +
      ",#1171ef)!important",
  },
  bgGradientWarning: {
    background:
      "linear-gradient(87deg," +
      theme.palette.warning.main +
      ",#fbb140)!important",
  },
  bgPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  bgPrimaryLight: {
    backgroundColor: theme.palette.primary.light,
  },
  bgError: {
    backgroundColor: theme.palette.error.main,
  },
  bgErrorLight: {
    backgroundColor: theme.palette.error.light,
  },
  bgWarning: {
    backgroundColor: theme.palette.warning.main,
  },
  bgWarningLight: {
    backgroundColor: theme.palette.warning.light,
  },
  bgInfo: {
    backgroundColor: theme.palette.info.main,
  },
  bgInfoLight: {
    backgroundColor: theme.palette.info.light,
  },
  bgSuccess: {
    backgroundColor: theme.palette.success.main,
  },
  verticalAlignMiddle: {
    verticalAlign: "middle",
  },
  avatarRoot: {
    width: "36px",
    height: "36px",
    fontSize: ".875rem",
  },
  anchorStyles: {
    fontWeight: 600,
  },
  buttonRootWhite: {
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
