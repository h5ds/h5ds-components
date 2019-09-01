import * as pages from './pages';

export const routes = [
  { name: 'home', text: 'Home', path: '/', component: pages.Home },
  { name: 'button-demo', text: 'Button', path: '/button-demo', component: pages.ButtonDemo },
  { name: 'icon-demo', path: '/icon-demo', text: 'Icon', component: pages.IconDemo },
  { name: 'artword-demo', path: '/artword-demo', text: 'Artword', component: pages.ArtwordDemo }
];
