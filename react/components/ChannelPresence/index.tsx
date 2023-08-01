import useWebSocket from "react-use-websocket";
import { useEffect, useState } from "react";
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
}

export default function Presence({
  apiKey,
  appId,
  channelId,
  classSuffix,
  mode,
  position,
  overideNumber,
}: Props) {
  const [online, setOnline] = useState(0);

  const { sendJsonMessage } = useWebSocket(
    `wss:${kirby}?channelId=presence:${channelId}&apiKey=${apiKey}&appId=${appId}`,
    {
      share: true,
      shouldReconnect: () => true,
      onMessage: (event) => {
        const data = event?.data ? JSON.parse(event?.data) : null;
        if (data) {
          setOnline(data.connected || 0);
        }
      },
      onClose: (event) => {},
      onError: (event) => {},
    }
  );

  useEffect(() => {
    sendJsonMessage({ type: "presence" });
  }, []);

  return (
    <Widget
      connected={overideNumber || online}
      classSuffix={classSuffix}
      mode={mode}
      position={position}
    />
  );
}
