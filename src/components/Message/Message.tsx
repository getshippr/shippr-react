import React, { ReactDOM } from "react";
import "./style.css";
import Message from "../../../react/components/Message";
import ShipprProvider from "../../../react/components/ShipprProvider";

interface MessageProps {
  /**
   * template configuration
   */
  template?: any;
  /**
   * classSuffix configuration
   */
  classSuffix?: any;
  /**
   * Custom rendering
   */
  customLayout?: (users: any[]) => JSX.Element;
  /**
   * initial state data
   */
  initialData?: any;
}

/**
 * Primary UI component for user interaction
 */
export const MessageWidget = ({
  customLayout,
  template,
  classSuffix,
  initialData,
  ...props
}: MessageProps) => {
  return (
    <div>
      <ShipprProvider apiKey="prod_Mi88YInp22c1lPN8tyvb" appId="40CAF8OS">
        <Message
          channelId="storybook-message-example"
          customLayout={customLayout}
          template={template}
          classSuffix={classSuffix}
          initialData={initialData}
        />
      </ShipprProvider>
    </div>
  );
};
