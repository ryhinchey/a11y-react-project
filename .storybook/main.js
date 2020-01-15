module.exports = {
  stories: ['../packages/**/*.stories.mdx'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader')
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
}
