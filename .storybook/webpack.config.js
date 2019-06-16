const common = require('../config/webpack.common');
const compilerOptions = {
  ...require('../tsconfig.json').compilerOptions,
  target: 'esnext',
};

delete compilerOptions.moduleResolution;

module.exports = ({ config }) => {
  const rules = [
    ...common.module.rules,
    {
      test: /\.(ts|tsx)$/,
      loader: 'react-docgen-typescript-loader',
      options: { compilerOptions },
    },
  ];

  const extensions = [
    ...config.resolve.extensions,
    '.ts',
    '.tsx'
  ]

  return { ...config, resolve: { ...config.resolve, extensions }, module: { ...config.module, rules } };
};
