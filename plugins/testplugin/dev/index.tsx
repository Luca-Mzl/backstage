import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { testpluginPlugin, TestpluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(testpluginPlugin)
  .addPage({
    element: <TestpluginPage />,
    title: 'Root Page',
  })
  .render();
