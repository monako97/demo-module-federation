import { type ConfigType } from '@moneko/core';

const conf: Partial<ConfigType> = {
  publicPath: 'auto',
  htmlPluginOption: {
    tags: [
      {
        tag: 'script',
        src: 'https://cdn.statically.io/gh/monako97/cdn/main/npm/n-code-live/1.3.1/umd/index.js',
      },
    ],
  },
  fallbackCompPath: '@/components/fallback',
  runtimeChunk: false,
  moduleFederation: [
    {
      name: 'demo_module_federation',
      library: { type: 'var', name: 'demo_module_federation' },
      exposes: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'react-dom/client',
        'react-router',
        'react-router-dom',
        'neko-ui',
        {
          name: 'dayjs',
          path: './components/dayjs/index.ts',
        },
        {
          name: 'Card',
          path: './components/card/index.tsx',
        },
      ],
    },
  ],
};

export default conf;
