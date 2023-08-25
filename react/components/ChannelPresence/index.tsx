import { useEffect, useState } from "react";
import { init } from "../../client";
import Widget from "./Widget";
import { UserPresence } from "../helper";

export interface Props {
  /**
   * Shippr API key
   */
  apiKey: string;
  /**
   * Shippr application ID
   */
  appId: string;
  /**
   * Name of the channel that will be used
   */
  channelId: string;
  /**
   * Identifier, will be generated if not provided
   * ex: email or a user ID
   */
  userId?: any;
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
  apiKey,
  appId,
  channelId,
  userId,
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
  const { usePresence } = init(appId, apiKey, {
    userId,
    wsOptions: { secureOnly: false },
  });

  const [users, setUsers] = useState<UserPresence[]>([]);
  const [usersInChannel] = usePresence([], `presence:${channelId}`);

  useEffect(() => {
    const added = usersInChannel
      .filter((p) => p.state === "connected")
      .filter(
        (m) =>
          !users
            .filter((s) => s.state === "connected")
            .find((l) => l.userId === m.userId)
      );

    const removed = usersInChannel.filter((k) =>
      users
        .filter(
          (m) =>
            usersInChannel.find(
              (l) => l.userId === m.userId && l.state === "disconnected"
            ) && m.state === "connected"
        )
        .map((p) => p.userId)
        .includes(k.userId)
    );

    setUsers(usersInChannel);

    if (onDisconnect && removed.length > 0) {
      onDisconnect(removed);
    }
    if (onConnect && added.length > 0) {
      onConnect(added);
    }
  }, [usersInChannel]);

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
