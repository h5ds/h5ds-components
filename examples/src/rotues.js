import * as pages from './pages';

export const routes = [{ path: '/button-demo', component: pages.ButtonDemo }, { path: '/', component: pages.Home },
{ path: '/icon-demo', component: pages.IconDemo }];

export const routesMenus = [
  { name: 'home', path: '/', text: 'Home' },
  { name: 'button-demo', path: '/button-demo', text: 'Button' },
  { name: 'swith-demo', path: '/swith-demo', text: 'Swith' },
  { name: 'icon-demo', path: '/icon-demo', text: 'Icon' }
];
