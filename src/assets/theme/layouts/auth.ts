/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Theme } from "@material-ui/core/styles";;
import createStyles from "@material-ui/styles/createStyles";

const componentStyles = (theme: Theme) => createStyles({
  bgDefault: {
    backgroundColor: theme.palette.dark.main,
  },
});

export default componentStyles;
