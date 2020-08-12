// i have an isomorphic libary that provides various external
// resources. let's simulate it via:
global.React = require("react");

module.exports = (_, { defaultConfig }) => {
  return {
    ...defaultConfig,
    webpack: webpackConfig => {
      webpackConfig.externals.unshift({
        react: "root React"
      });
      return webpackConfig;
    }
  };
};
