import type { Meta, StoryObj } from "@storybook/react";

import { ChannelPresence } from "./ChannelPresence";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
//@ts-ignore
const meta: any = {
  title: "ChannelPresence",
  component: ChannelPresence,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ChannelPresence>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple: Story = {
  name: "Simple Indicator",
  args: {
    mode: "simple",
    overideNumber: 7,
  },
};

export const Stacked: Story = {
  name: "Stacked Indicator",
  args: {
    mode: "stacked",
    overideNumber: 7,
  },
};

export const VerticalStacked: Story = {
  name: "Stacked Vertical Indicator",
  args: {
    mode: "stacked",
    overideNumber: 7,
    position: "vertical",
  },
};
