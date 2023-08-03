import React, { ReactDOM } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { MessageWidget } from "./Message";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
//@ts-ignore
const meta: any = {
  title: "Message",
  component: MessageWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof MessageWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FromTemplate: Story = {
  name: "From template",
  args: {
    template: { type: "basic" },
    initialData: { title: "this is my title", body: "this is my body" },
  },
};

export const CustomLayout: Story = {
  name: "Custom Layout",
  args: {
    initialData: { title: "this is my title", body: "this is my body" },
    customLayout: (data: any) => {
      return (
        <div className="text-indigo-500 flex flex-wrap">
          title: {data?.title}
          <br /> body: {data?.body}
        </div>
      );
    },
  },
};
