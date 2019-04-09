const path = require('path');
const compilerOptions = {
  ...require('../tsconfig.json').compilerOptions,
  // For allowSyntheticDefaultImports/esModuleInterop, a target of "es6" or
  // above is required. ts-loader will load the project tsconfig.json normally
  // with its compilation settings.
  target: 'esnext',
};

delete compilerOptions.moduleResolution;

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: { compilerOptions },
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
