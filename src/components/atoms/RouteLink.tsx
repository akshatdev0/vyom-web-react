import React from 'react';

import { Link } from 'react-router-dom';

import { getPath, RouteMapping } from 'core/routing';
import { useLayout } from 'hooks';

type Props = {
  to: RouteMapping;
  children: React.ReactNode;
};

const RouteLink = ({ to, children }: Props): JSX.Element => {
  const layout = useLayout();
  return <Link to={getPath(layout, to)}>{children}</Link>;
};

export default RouteLink;
