import React from 'react';

import { getPath, RouteMapping } from 'core/routing';
import { useLayout } from 'hooks';
import { Link } from 'react-router-dom';

type Props = {
  to: RouteMapping;
  children: React.ReactNode;
};

const RouteLink = ({ to, children }: Props): JSX.Element => {
  const layout = useLayout();
  return <Link to={getPath(layout, to)}>{children}</Link>;
};

export default RouteLink;
