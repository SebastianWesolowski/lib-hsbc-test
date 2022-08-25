import { addReadme } from "storybook-readme";
import "../src/style.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
  },
};

export const decorators = [(Story) => <>{Story()}</>, addReadme()];
