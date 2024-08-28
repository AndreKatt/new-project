import MiniCssExtractPlugin from "mini-css-extract-plugin"

import type { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const cssStyleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;
  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
        localIdentName: isDev 
          ? '[path][name]__[local]--[hash:base64:5]' 
          : '[hash:base64:8]',
      },
    },
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      cssStyleLoader,
      cssLoader,
      "sass-loader",
    ],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    tsLoader,
    styleLoader,
  ]
}