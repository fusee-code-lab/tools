import { type RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

let routes: RouteDefinition[] = [
  {
    path: '/home',
    component: lazy(() => import('@/renderer/views/pages/home/index'))
  }
];

export default (route?: string) => {
  if (route) {
    routes.forEach((item) => item.path === route && (item.path = ['/', route]));
  }
  return routes;
};
