import React from 'react';
import { Route } from 'react-router-dom';

import { Layout } from 'layouts';
import { RouteMapping, routes } from 'routing';

export const getPath = (layout: Layout, parts: string | Array<string>): string => {
  const path = getParts(parts);
  return `${layout}/${path}`;
};

export const getParts = (parts: string | Array<string>): string => {
  return Array.isArray(parts) ? parts.join('/') : parts;
};

export const getRoutesForLayout = (layout: Layout): any => {
  return getRoutes(layout, routes);
};

export const getRoutes = (layout: Layout, routes: Record<string, RouteMapping>): any => {
  const r: Array<JSX.Element> = [];
  Object.entries(routes).forEach(([key, value]) => {
    if (value.layouts && value.layouts.includes(layout)) {
      r.push(<Route path={getPath(layout, value.parts)} component={value.component} key={key} />);
    }
  });
  return r;
};
