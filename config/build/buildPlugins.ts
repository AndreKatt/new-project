import { ProgressPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin"

import type { WebpackPluginInstance } from 'webpack';
import type { BuildOptions } from './types/config';

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ]
}