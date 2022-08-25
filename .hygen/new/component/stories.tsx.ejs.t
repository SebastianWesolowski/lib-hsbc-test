---
to: <%= absPath %>/<%= component_name %>.stories.tsx
---
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary as PrimaryDoc,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import { <%= component_name %> } from "./<%= component_name %>";
import README from "./README.md";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "<%= component_name %>",
  component: <%= component_name %>,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    dummy: {
      name: "dummy",
      type: { name: "string", required: true },
      defaultValue: "dummy value",
      description: "Label inside",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "dummy value" },
      },
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <hr />
          <Subtitle />
          <Description markdown={README} />
          <PrimaryDoc />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as ComponentMeta<typeof <%= component_name %>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof <%= component_name %>> = (args) => (
  <<%= component_name %> {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  dummy: "dummy",
};
