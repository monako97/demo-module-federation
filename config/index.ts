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
