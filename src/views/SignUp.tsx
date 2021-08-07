import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import componentStyles from 'assets/theme/views/auth/register';
import { AuthHeader } from 'components/molecules';
import { CreateAccount, GenerateOtp, VerifyAccount, CreatePassword } from 'features/auth';

const useStyles = makeStyles(componentStyles);

export enum Stage {
  ACCOUNT_CREATION,
  OTP_GENERATION,
  ACCOUNT_VERIFICATION,
  PASSWORD_CREATION,
}

const TOTAL_NUMBER_OF_STAGES = 4;

function useStage() {
  const [currentStage, setCurrentStage] = useState(Stage.ACCOUNT_CREATION);

  const nextStage = () => currentStage < TOTAL_NUMBER_OF_STAGES - 1 && setCurrentStage(currentStage + 1);
  const prevStage = () => currentStage > 0 && setCurrentStage(currentStage - 1);
  const setStage = (stage: Stage) => {
    setCurrentStage(stage);
  };

  return [currentStage, prevStage, nextStage, setStage];
}

const StageComponent = (props: any) => {
  let component: JSX.Element;
  switch (props.stage) {
    case Stage.OTP_GENERATION:
      component = <GenerateOtp {...props} />;
      break;

    case Stage.ACCOUNT_VERIFICATION:
      component = <VerifyAccount {...props} />;
      break;

    case Stage.PASSWORD_CREATION:
      component = <CreatePassword />;
      break;

    default:
      component = <CreateAccount {...props} />;
  }
  return component;
};

const SignUp: React.FunctionComponent = () => {
  const classes = useStyles();
  const [stage, prevStage, nextStage, setStage] = useStage();
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const stageProps = {
    stage,
    prevStage,
    nextStage,
    setStage,
    mobileNumber,
    setMobileNumber,
  };

  return (
    <>
      <AuthHeader
        title="Create an account"
        description="Use these awesome forms to sign in or create new account in your project for free."
      />
      <Container component={Box} classes={{ root: classes.containerRoot }}>
        <Grid container classes={{ root: classes.gridContainerRoot }}>
          <Grid item xs={12} lg={6} md={8}>
            <StageComponent {...stageProps} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SignUp;
