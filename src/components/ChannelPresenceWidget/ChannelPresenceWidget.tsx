import React from "react";
import "./style.css";
import ChannelPresence from "../../../react/components/ChannelPresence";

interface ChannelPresenceWidgetProps {
  /**
   * Only for demo
   */
  overideNumber?: number;
  /**
   * Stacked will stack the pictures
   */
  mode?: "stacked" | "simple";

  /**
   * horizontal layout or lateral layout
   */
  position?: "lateral" | "horizontal";
}

/**
 * Primary UI component for user interaction
 */
export const ChannelPresenceWidget = ({
  mode = "simple",
  position,
  overideNumber = 1,
  ...props
}: ChannelPresenceWidgetProps) => {
  return (
    <div>
      <ChannelPresence
        apiKey=""
        appId=""
        channelId="storybook-presence-indicator"
        mode={mode}
        position={position}
        overideNumber={overideNumber}
      />
    </div>
  );
};
