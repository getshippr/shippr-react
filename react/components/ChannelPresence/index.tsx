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
      connected={overideNumber || users.length}
      classSuffix={classSuffix}
      mode={mode}
      position={position}
    />
  ) : (
    customLayout(users)
  );
}
