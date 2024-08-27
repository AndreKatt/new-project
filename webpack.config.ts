import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';

import type { Configuration } from 'webpack';
import type { BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  base: path.resolve(__dirname),
};

const mode = 'development';
const isDev = mode === 'development';

const config: Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config