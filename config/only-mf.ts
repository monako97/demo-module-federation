import { type ConfigType, PACKAGENAME, resolveProgramPath } from '@moneko/core';

const conf: Partial<ConfigType> = {
  entry: resolveProgramPath('components/index.ts'),
  basename: `/${PACKAGENAME}`,
  publicPath: `https://monako97.github.io/${PACKAGENAME}/`,
};

export default conf;
