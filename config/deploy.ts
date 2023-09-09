import { type ConfigType } from '@moneko/core';

const conf: Partial<ConfigType> = {
  bar: false,
  seo: {
    domain: 'monako97.github.io',
    nojekyll: true,
  },
  basename: '/demo-module-federation/',
  publicPath: 'https://monako97.github.io/demo-module-federation/',
  fixBrowserRouter: {
    pathSegmentsToKeep: 1,
    path: '404.html',
  },
};

export default conf;
