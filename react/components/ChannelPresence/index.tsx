import { useEffect, useState } from "react";
import { init } from "../../client";
import Widget from "./Widget";
import { UserPresence } from "../helper";
import { useShipprConfig } from "../ShipprProvider";

export interface Props {
  /**
   * Shippr API key
   */
  apiKey?: string;
  /**
   * Shippr application ID
   */
  appId?: string;
  /**
   * Name of the channel that will be used
   */
  channelId: string;
  /**
   * custom class appended to the component
   */
  classSuffix?: string;
  /**
   * Stacked or simple
   */
  mode?: "stacked" | "simple";
  /**
   * Vertical or horizontal
   */
  position?: "vertical" | "horizontal";
  /**
   * for test purposes: forcing a number of active connection
   */
  overideNumber?: number;
  /**
   * For the stacked mode: will display up to X number of vignettes
   */
  stackLimit?: number;
  /**
   * Will only display active connection (filtering out inactive users)
   */
  filterOnActive?: boolean;
  /**
   * Show a simple tooltip on hover or click
   */
  showTooltip?: boolean;
  /**
   * Tooltip position
   */
  tooltipPosition?: "top" | "left" | "right" | "bottom";
  /**
   * Tooltip trigger
   */
  tooltipTrigger?: "click" | "hover";

  /**
   * Build your own tooltip layout
   * example:
   * customTooltip: (user) => {
   *  return <div>{user.userId} is connected</div>
   * }
   */
  customTooltip?: (user: UserPresence) => JSX.Element;
  /**
   * Build your own user layout
   * example:
   * customTooltip: (user) => {
   *  return <div>{user.userId} is connected</div>
   * }
   */
  customUserLayout?: (user: UserPresence) => JSX.Element;
  /**
   * Build your own layout
   * example:
   * customLayout: (users) => {
   *  return <div>{users.length} connected</div>
   * }
   * warning: if provided, you have to rebuild your own tooltip
   */
  customLayout?: (users: UserPresence[]) => JSX.Element;
  /**
   * Attach a click event to a vignette
   */
  onClick?: (users: UserPresence[]) => void;
  /**
   * Triggered when a user connects
   * "users" is users that joined the channel
   */
  onConnect?: (users: UserPresence[]) => void;
  /**
   * Triggered when users disconnect
   * "users" is users that left the channel
   */
  onDisconnect?: (users: UserPresence[]) => void;
}

export default function Presence({
  channelId,
  classSuffix,
  mode,
  position,
  overideNumber,
  onConnect,
  onDisconnect,
  customLayout,
  customUserLayout,
  onClick,
  filterOnActive,
  stackLimit,
  showTooltip,
  tooltipPosition,
  customTooltip,
  tooltipTrigger,
}: Props) {
  const { appId, apiKey, options } = useShipprConfig();
  const { usePresence } = init(appId, apiKey, options);

  const [users, setUsers, addedUsers, removedUsers] = usePresence(
    [],
    `presence:${channelId}`
  );

  useEffect(() => {
    if (addedUsers.length && onConnect) {
      onConnect(addedUsers);
    }
  }, [addedUsers]);

  useEffect(() => {
    if (removedUsers.length && onDisconnect) {
      onDisconnect(removedUsers);
    }
  }, [removedUsers]);

  return !customLayout ? (
    <Widget
      users={users.filter((p) => {
        return filterOnActive ? p.state === "connected" : true;
      })}
      overideNumber={overideNumber}
      classSuffix={classSuffix}
      mode={mode}
      position={position}
      onClick={onClick}
      stackLimit={stackLimit}
      showTooltip={showTooltip}
      customTooltip={customTooltip}
      tooltipPosition={tooltipPosition}
      tooltipTrigger={tooltipTrigger}
      customUserLayout={customUserLayout}
    />
  ) : (
    customLayout(
      users.filter((p) => {
        return filterOnActive ? p.state === "connected" : true;
      })
    )
  );
}
