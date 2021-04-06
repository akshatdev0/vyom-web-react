/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useRef, RefObject } from 'react';
import { useLocation, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
// reactstrap components
import { Container } from 'reactstrap';
// core components
import AdminTopbar from 'components/organisms/AdminTopbar';
import AdminFooter from 'components/organisms/AdminFooter';
import Sidebar from 'components/organisms/Sidebar';
import { Layout } from 'layouts';
import { RouteParams } from 'types';
import routes from './routes';

const AdminLayout: React.FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const mainContent: RefObject<HTMLDivElement> = useRef({}) as RefObject<HTMLDivElement>;
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
    if (mainContent && mainContent.current) {
      mainContent.current.scrollTop = 0;
    }
  }, [location]);

  const getRoutes = (routes: RouteParams[]) => {
    return routes.map((prop, key) => <Route path={Layout.Admin + prop.path} component={prop.component} key={key} />);
  };

  const getBrandText = (path: string) => {
    for (let i = 0; i < routes.length; i++) {
      if (path.indexOf(Layout.Admin + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return '';
  };

  return (
    <>
      <Sidebar
        {...props}
        layout={Layout.Admin}
        routes={routes}
        logo={{
          innerLink: Layout.Admin + '/index',
          imgSrc: require('../../assets/img/brand/argon-react.png').default,
          imgAlt: '...',
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminTopbar {...props} brandText={getBrandText(props.location.pathname)} />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to={Layout.Admin + '/index'} />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default AdminLayout;
