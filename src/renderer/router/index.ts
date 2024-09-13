import { type RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

let routes: RouteDefinition[] = [
  {
    path: '/home',
    component: lazy(() => import('@/renderer/views/pages/home'))
  },
  {
    path: '/about',
    component: lazy(() => import('@/renderer/views/pages/about'))
  }
];

export const navigate = (path: string, params?: { [key: string]: string }) => {
  if (params) {
    path += '?' + new URLSearchParams(params).toString();
  }
  window.location.hash = path;
};

export const navigateParams = (names: string[]) => {
  const str = window.location.hash.split('?')[1];
  if (!str) return;
  const data = new URLSearchParams(str);
  let obj: { [key: string]: any } = {};
  for (let name of names) {
    obj[name] = data.get(name);
  }
  return obj;
};

export default (route?: string) => {
  if (route) {
    routes.forEach((item) => item.path === route && (item.path = ['/', route]));
  }
  return routes;
};
