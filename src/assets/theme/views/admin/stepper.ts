/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme: Theme) => createStyles({
  stepperGrid: {
    boxShadow: boxShadows.boxShadowRight,
  },
  stepperRoot: {
    backgroundColor: theme.palette.transparent.main,
    '& .MuiStepIcon-root': {
      width: '1.7rem',
      height: '1.7rem',
      fontWeight: 600,
    },
  },
});

export default componentStyles;
