import React, { ReactDOM } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ChartWidget } from "./Chart";
import { Axis, Chart, Legend, LineAdvance } from "../../../react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
//@ts-ignore
const meta: any = {
  title: "Realtime Charts",
  component: ChartWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ChartWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
  name: "Custom Layout",
  args: {},
};
