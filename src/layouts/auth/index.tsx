import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Switch, Redirect } from 'react-router-dom';

import componentStyles from 'assets/theme/layouts/auth';
import { AuthTopbar, AuthFooter } from 'components/molecules';
import { getRoutes } from 'core/routing';
import { useScrollTop } from 'hooks';
import { Layouts } from 'layouts';
import routes from 'routes';

const useStyles = makeStyles(componentStyles);

const AuthLayout: React.FunctionComponent = () => {
  const classes = useStyles();
  const mainContentRef = useScrollTop();

  useEffect(() => {
    document.body.classList.add(classes.bgDefault);
    return () => {
      document.body.classList.remove(classes.bgDefault);
    };
  });

  useEffect(() => {
    document.body.classList.add('bg-default');
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove('bg-default');
    };
  });

  return (
    <>
      <div className="main-content" ref={mainContentRef}>
        <AuthTopbar />
        <Switch>
          {getRoutes(Layouts.AUTH, routes)}
          <Redirect from="*" to={Layouts.AUTH.path + '/sign-in'} />
        </Switch>
      </div>
      <AuthFooter />
    </>
  );
};

export default AuthLayout;
