import { JSX } from "react";

interface BaseRoute {
  element: JSX.Element;
}

interface IndexRoute extends BaseRoute {
  index: true;
  path?: never;
}

interface PathRoute extends BaseRoute {
  path: string;
  index?: never;
}

export type AppRoute = IndexRoute | PathRoute;
export interface LayoutRoute {
  layout: JSX.Element;
  children: AppRoute[];
}
