const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  entry: ['./src/index.tsx'],

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsConfigPathsPlugin()],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
      mobile: true,
      lang: 'ru',
      title: 'CookyBooky',
    }),
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },

      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
    ],
  },
};
