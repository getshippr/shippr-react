import useWebSocket from "react-use-websocket";
import { ReactDOM, useEffect, useState } from "react";
import cx from "classnames";
import { kirby } from "../../client/hosts";
import Widget from "./Widget";

export interface Props {
  apiKey: string;
  appId: string;
  channelId: string;
  classSuffix?: string;
  mode?: string;
  position?: string;
  overideNumber?: number;
  customLayout?: (users: any[]) => JSX.Element;
  onClick?: (users: any) => void;
}

export default function Presence({
  apiKey,
  appId,
  channelId,
  classSuffix,
  mode,
  position,
  overideNumber,
  customLayout,
  onClick,
}: Props) {
  const [users, setUsers] = useState<any[]>([]);

  const { sendJsonMessage } = useWebSocket(
    `wss:${kirby}?channelId=presence:${channelId}&apiKey=${apiKey}&appId=${appId}`,
    {
      share: true,
      shouldReconnect: () => true,
      onMessage: (event) => {
        const data = event?.data ? JSON.parse(event?.data) : null;
        if (data && data.users) {
          setUsers(data.users || 0);
        }
      },
      onClose: (event) => {},
      onError: (event) => {},
    }
  );

  useEffect(() => {
    sendJsonMessage({ type: "presence" });
  }, []);

  return !customLayout ? (
    <Widget
      users={users}
      overideNumber={overideNumber}
      classSuffix={classSuffix}
      mode={mode}
      position={position}
      onClick={onClick}
    />
  ) : (
    customLayout(users)
  );
}
