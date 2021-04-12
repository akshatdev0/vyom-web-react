import React, { useState } from 'react';

// reactstrap components
import { Col } from 'reactstrap';

import { CreateAccount, GenerateOtp, VerifyAccount } from 'features/auth';

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

    // case Stage.PASSWORD_CREATION:
    //   component = <CreatePassword />;
    //   break;

    default:
      component = <CreateAccount {...props} />;
  }
  return component;
};

const SignUp: React.FunctionComponent = () => {
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
    <Col lg="5" md="7">
      <StageComponent {...stageProps} />
    </Col>
  );
};

export default SignUp;
