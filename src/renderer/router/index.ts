import { type RouteDefinition, useNavigate } from '@solidjs/router';
import { lazy } from 'solid-js';

let routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('@/renderer/views/pages/layout')),
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
  if (route) {
    routes.unshift({
      path: '/',
      preload: () => useNavigate()(route, { replace: true })
    });
  }
  return routes;
};

export default router;
