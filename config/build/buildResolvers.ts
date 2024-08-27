import path from 'path';

import type { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers({paths}: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(paths.base, 'src'),
      config: path.resolve(paths.base, 'config'),
    },
  }
}