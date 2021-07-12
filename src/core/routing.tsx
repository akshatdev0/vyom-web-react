import React from 'react';

import { Route } from 'react-router-dom';

import { Layout } from './layout';

export type RouteMapping = {
  parts: string | Array<string>;
  component: React.FunctionComponent;
  layouts: Array<Layout>;
};

export const getPath = (layout: Layout, route: RouteMapping): string => {
  const path = getParts(route);
  return `${layout.path}/${path}`;
};

export const getParts = (route: RouteMapping): string => {
  return Array.isArray(route.parts) ? route.parts.join('/') : route.parts;
};

export const getRoutes = (layout: Layout, routes: Record<string, RouteMapping>): any => {
  const r: Array<JSX.Element> = [];
  Object.entries(routes).forEach(([key, value]) => {
    if (value.layouts && value.layouts.includes(layout)) {
      r.push(<Route path={getPath(layout, value)} component={value.component} key={key} />);
    }
  });
  return r;
};
