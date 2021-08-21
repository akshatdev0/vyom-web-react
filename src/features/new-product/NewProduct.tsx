import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import componentStyles from 'assets/theme/views/admin/container';
import { ViewHeader } from 'components/molecules';

const useStyles = makeStyles(componentStyles);

const NewProduct: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <ViewHeader title="Add a New Product" breadcrumbs={['Product Catalog', 'New Product']} />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Paper classes={{ root: classes.paperRoot }} elevation={1}>
          <Grid container component={Box} height="100%"></Grid>
        </Paper>
      </Container>
    </>
  );
};

export default NewProduct;
