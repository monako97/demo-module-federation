import path from 'path';
import type { ConfigType } from '@moneko/core';

const conf: Partial<ConfigType> = {
  entry: path.join(process.cwd(), './components/index.ts'),
};

export default conf;
