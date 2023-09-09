import type { ConfigType } from '@moneko/core';

const conf: Partial<ConfigType> = {
  htmlPluginOption: {
    favicon: './site/assets/images/favicon.ico',
  },
  fallbackCompPath: '@/components/fallback',
  externals: [/(.+)\/__tests__\/(.+)/i],
  minifier: {
    css: {
      type: 'cssnano',
    },
  },
  publicPath: 'auto',
  runtimeChunk: false,
  moduleFederation: [
    {
      name: 'demo_remote_lib',
      library: { type: 'var', name: 'demo_remote_lib' },
      exposes: [
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
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
