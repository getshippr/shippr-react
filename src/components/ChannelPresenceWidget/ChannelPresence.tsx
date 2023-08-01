import React, { ReactDOM } from "react";
import "./style.css";
import Presence from "../../../react/components/ChannelPresence";

interface ChannelPresenceProps {
  /**
   * Only for demo
   */
  overideNumber?: number;
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
  ...props
}: ChannelPresenceProps) => {
  return (
    <div>
      <Presence
        apiKey=""
        appId=""
        channelId="storybook-presence-indicator"
        mode={mode}
        position={position}
        overideNumber={overideNumber}
        customLayout={customLayout}
      />
    </div>
  );
};
