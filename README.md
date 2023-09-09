# demo-remote-lib

> 这里教你如何制作并发布一个moduleFederation应用, 使用组件库应用类型只是为了方便生成文档

## 安装依赖

```shell
npm install
# or
yarn install
```

## 启动项目

```shell
npm start
# or
yarn start
```

## 打包项目(同时打包文档和moduleFederation)

```shell
npm run build
# or
yarn build
```

## 打包项目`使用自定义配置`

> 在打包其它有特殊配置的 bundle 时, 可以通过命令行参数来加载额外的配置文件;

例如: 只打包 moduleFederation, 使用 **config/index.ts** 与 **config/only-mf.ts** 合并后的配置进行编译.

```shell
npm run build --config=only-mf
# or
yarn build config=only-mf
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
          name: 'demo_remote_lib',
          // moduleFederation 发布的地址
          host: '//monako97.github.io/demo-module-federation',
          library: ['react', 'react-dom', 'react-router', 'react-router-dom', 'dayjs'],
        },
      ],
    },
  ],
};

export default conf;
```

## 使用

```jsx
import React, { type FC } from 'react';
import Card from 'demo_remote_lib/Card';
import dayjs from 'dayjs';

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
