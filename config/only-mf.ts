import { type ConfigType, PACKAGENAME, resolveProgram } from '@moneko/core';

const conf: Partial<ConfigType> = {
  entry: resolveProgram('components/index.ts'),
  basename: `/${PACKAGENAME}`,
  publicPath: `https://monako97.github.io/${PACKAGENAME}/`,
};

export default conf;
