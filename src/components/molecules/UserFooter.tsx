import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import componentStyles from 'assets/theme/components/footers/user-footer';

const useStyles = makeStyles(componentStyles);

const UserFooter = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box component="footer" width="100%">
      <Grid container classes={{ root: classes.justifyContentCenter }}>
        <Box component={Grid} display="flex" alignItems="center" className={classes.justifyContentCenter}>
          <div className={classes.copyrightWrapper}>
            © {new Date().getFullYear()}{' '}
            <a className={classes.copyrightLink} href="#" rel="noopener noreferrer" target="_blank">
              Vyom
            </a>
          </div>
        </Box>
        <Grid item xl={6} component={Box} display="flex" justifyContent="flex-end">
          <Box
            component={List}
            display="flex"
            justifyContent="center"
            alignItems="center"
            className={classes.flexDirectionColumn}
          >
            <ListItem
              component="a"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              Features
            </ListItem>

            <ListItem
              component="a"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              About Us
            </ListItem>

            <ListItem
              component="a"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              Blog
            </ListItem>

            <ListItem
              component="a"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              MIT License
            </ListItem>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserFooter;
