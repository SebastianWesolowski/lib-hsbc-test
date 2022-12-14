const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // "@storybook/preset-create-react-app",
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     configureJSX: true,
    //   },
    // },
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-readme/register",
    "storybook-addon-outline",
    // {
    //   name: "@storybook/preset-scss",
    //   options: {
    //     cssLoaderOptions: {
    //       modules: true,
    //       localIdentName: "[name]__[local]--[hash:base64:5]",
    //     },
    //   },
    // },
    "@storybook/addon-a11y",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Make whatever fine-grained changes you need

    Object.assign(config.resolve.alias, {
      components: path.resolve(__dirname, "../src/components"),
      atoms: path.resolve(__dirname, "../src/components/atoms"),
      molecules: path.resolve(__dirname, "../src/components/molecules"),
      organisms: path.resolve(__dirname, "../src/components/organisms"),
      templates: path.resolve(__dirname, "../src/components/templates"),
      pages: path.resolve(__dirname, "../src/components/pages"),
      types: path.resolve(__dirname, "../src/components/types"),
    });
    Object.assign(config.resolve.fallback, {
      "crypto-browserify": require.resolve("crypto-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    });

    // Return the altered config
    return config;
  },
};
