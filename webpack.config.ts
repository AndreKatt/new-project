import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';

import type { Configuration } from 'webpack';
import type { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    base: path.resolve(__dirname),
  };
  
  const PORT = env.port || 3000;
  const mode = env.mode || 'development';

  const isDev = mode === 'development';
  
  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config
}