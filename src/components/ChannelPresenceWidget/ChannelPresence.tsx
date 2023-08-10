import React, { ReactDOM } from "react";
import "./style.css";
import Presence from "../../../react/components/ChannelPresence";
import shippr from "../../../react";

interface ChannelPresenceProps {
  /**
   * Only for demo
   */
  overideNumber?: number;
  /**
   * Maximum number of picture displayed
   */
  stackLimit?: number;

  /**
   * Custom rendering
   */
  onClick?: (userId: any) => void;
  /**
   * Custom rendering
   */
  customLayout?: (users: any[]) => JSX.Element;
  /**
   * Stacked will stack the pictures
   */
  mode?: "stacked" | "simple";

  /**
   * horizontal layout or vertical layout
   */
  position?: "vertical" | "horizontal";
}

/**
 * Primary UI component for user interaction
 */
export const ChannelPresence = ({
  mode = "simple",
  position,
  overideNumber = 1,
  customLayout,
  onClick,
  stackLimit,
  ...props
}: ChannelPresenceProps) => {
  const test = shippr("VMQJK054", "prod_boJTvKBJ80dyBUCB5XuP");
  debugger;
  test.subscribe("storybook-presence-indicator").on((data: any, err: any) => {
    debugger;
  });
  return (
    <div>
      <Presence
        apiKey="prod_boJTvKBJ80dyBUCB5XuP"
        appId="VMQJK054"
        channelId="storybook-presence-indicator"
        mode={mode}
        position={position}
        overideNumber={overideNumber}
        customLayout={customLayout}
        onClick={onClick}
        stackLimit={stackLimit}
      />
    </div>
  );
};
