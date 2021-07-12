import { Layout } from 'layouts';
import React from 'react';

export type RouteMapping = {
  parts: string | Array<string>;
  component: React.FunctionComponent;
  layouts: Array<Layout>;
};

export { default as routes } from './routes';
export { getParts, getPath, getRoutes, getRoutesForLayout } from './utils';
