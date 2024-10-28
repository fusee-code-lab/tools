import { type RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

let routes: RouteDefinition[] = [
  {
    path: '/main',
    component: lazy(() => import('@/renderer/views/layout')),
    children: [
      {
        path: '/home',
        component: lazy(() => import('@/renderer/views/pages/home'))
      },
      {
        path: '/about',
        component: lazy(() => import('@/renderer/views/pages/about'))
      }
    ]
  }
];

const router = (route?: string) => {
  if (route && route !== '/') {
    routes.unshift({
      path: '/',
      preload: () => (window.location.hash = '#' + route)
    });
  }
  return routes;
};

export default router;
