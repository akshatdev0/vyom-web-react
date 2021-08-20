import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';

import componentStyles from 'assets/theme/views/admin/container';
import stepperStyles from 'assets/theme/views/admin/stepper';
import { ViewHeader } from 'components/molecules';

import SelectVertical from './SelectVertical';

const useStyles = makeStyles(componentStyles);
const useStepperStyles = makeStyles(stepperStyles);

function getSteps() {
  return ['Select vertical', 'Select brand', 'Add product details'];
}

const NewProduct: React.FunctionComponent = () => {
  const classes = { ...useStyles(), ...useStepperStyles() };

  const steps = getSteps();

  return (
    <>
      <ViewHeader title="Add a New Product" breadcrumbs={['Product Catalog', 'New Product']} />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Paper classes={{ root: classes.paperRoot }} elevation={1}>
          <Grid container component={Box} height="100%">
            <Grid item md={3} lg={2} className={classes.stepperGrid}>
              <Stepper activeStep={0} orientation="vertical" className={classes.stepperRoot}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent></StepContent>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item md={9} lg={10}>
              <SelectVertical />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default NewProduct;
