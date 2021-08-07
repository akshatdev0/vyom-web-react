import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import componentStyles from 'assets/theme/components/headers/auth-header';
import hexToRgb from 'assets/theme/hex-to-rgb.js';

type Props = {
  title: string;
  description: string;
};

const useStyles = makeStyles(componentStyles);

const AuthHeader: React.FunctionComponent<Props> = ({ title, description }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box className={classes.header} position="relative" paddingTop="8rem" paddingBottom="8rem">
        <Container maxWidth="xl">
          <Box marginBottom="6rem" textAlign="center">
            <Grid container classes={{ root: classes.gridContainer }}>
              <Grid item lg={5} md={6} xs={12}>
                {title && (
                  <Typography component="h1" variant="h1" color="inherit">
                    {title}
                  </Typography>
                )}
                {description && (
                  <Box
                    component="p"
                    color={'rgba(' + hexToRgb(theme.palette.white.main) + ',0.8)'}
                    lineHeight="1.7"
                    fontSize="1rem"
                  >
                    {description}
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box
          className={classes.backdropContainer}
          position="absolute"
          zIndex="100"
          height="70px"
          top="auto"
          bottom="0"
          left="0"
          right="0"
          width="100%"
          overflow="hidden"
        >
          <svg
            className={classes.backdrop}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon fill={theme.palette.dark.main} points="2560 0 2560 100 0 100" />
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default AuthHeader;
