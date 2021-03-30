import { createPlugin, createRoutableExtension } from '@backstage/core';

import { rootRouteRef } from './routes';

export const testpluginPlugin = createPlugin({
  id: 'testplugin',
  routes: {
    root: rootRouteRef,
  },
});

export const TestpluginPage = testpluginPlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/MyPage').then(m => m.MyPage),
    mountPoint: rootRouteRef,
  }),
);
