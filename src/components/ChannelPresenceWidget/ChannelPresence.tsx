import "./style.css";
import Presence from "../../../react/components/ChannelPresence";
import { UserPresence } from "../../../react/components/helper";

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
  customLayout?: (users: UserPresence[]) => JSX.Element;

  /**
   * Custom tooltip
   */
  customTooltip?: (users: UserPresence) => JSX.Element;
  /**
   * Stacked will stack the pictures
   */
  mode?: "stacked" | "simple";

  /**
   * horizontal layout or vertical layout
   */
  position?: "vertical" | "horizontal";

  /**
   * show tooltip
   */
  showTooltip?: boolean;

  /**
   * show tooltip
   */
  tooltipPosition?: "top" | "bottom" | "left" | "right";
}

/**
 * Primary UI component for user interaction
 */
export const ChannelPresence = ({
  mode = "simple",
  position,
  overideNumber,
  customLayout,
  onClick,
  stackLimit,
  showTooltip,
  tooltipPosition,
  customTooltip,
  ...props
}: ChannelPresenceProps) => {
  return (
    <div>
      <Presence
        apiKey="prod_Mi88YInp22c1lPN8tyvb"
        appId="40CAF8OS"
        channelId="storybook-presence-indicator"
        mode={mode}
        position={position}
        overideNumber={overideNumber}
        customLayout={customLayout}
        onClick={onClick}
        stackLimit={stackLimit}
        userId={"toto"}
        showTooltip={showTooltip}
        tooltipPosition={tooltipPosition}
        customTooltip={customTooltip}
      />
    </div>
  );
};
