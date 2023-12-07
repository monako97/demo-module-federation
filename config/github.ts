import { type ConfigType, PACKAGENAME } from '@moneko/core';

const conf: Partial<ConfigType> = {
  devtool: false,
  bar: false,
  basename: `/${PACKAGENAME}`,
  publicPath: `https://monako97.github.io/${PACKAGENAME}/`,
};

export default conf;
