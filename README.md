# demo-remote-lib

> 这里教你如何制作并发布一个moduleFederation应用, 使用组件库应用类型只是为了方便生成文档

## 启动项目

```shell
yarn start
```

## 打包项目(同时打包文档和moduleFederation)

```shell
yarn build
```

> 在打包其它有特殊配置的 bundle 时, 可以通过命令行参数来加载额外的配置文件;

## 打包发布到 github pages 上的资源(文档、moduleFederation)

```shell
yarn build config=github
```

## 只打包 moduleFederation

```shell
yarn build config=only-mf
```

## 打包 umd

```shell
yarn build config=umd
```

## 发布后在其它应用中如何接入?

```ts
// config/index.ts
import type { ConfigType } from '@moneko/core';

const conf: Partial<ConfigType> = {
  moduleFederation: [
    {
      name: 'demo_micro_app_react',
      // 接入 moduleFederation
      remotes: [
        {
          // moduleFederation的名称
          name: 'demo_remote_lib',
          // moduleFederation 的地址
          host: 'https://monako97.github.io/demo-module-federation',
          // 从 moduleFederation 载入的依赖
          library: [
            'react',
            'react/jsx-runtime',
            'react-dom',
            'react-dom/client',
            'react-router',
            'react-router-dom',
            'dayjs',
            'neko-ui',
          ],
        },
      ],
    },
  ],
};

export default conf;
```

## 使用

```jsx
// 从 moduleFederation 加载的 React
import React, { type FC } from 'react';
// 从 moduleFederation 加载的 dayjs
import dayjs from 'dayjs';
// 从 moduleFederation 加载的 Card
import Card from 'demo_remote_lib/Card';

console.log(dayjs());
const Root: FC = () => {
  return (
    <>
      Root Page
      <Card title={'csa'} />
    </>
  );
};

export default Root;
```

## 更多详细配置参考

[click](https://monako97.github.io/neko-ui/@moneko/config)
