import useWebSocket from "react-use-websocket";
import { useEffect, useState } from "react";
import { push } from "../../client/hosts";
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
  onUserAdded?: () => any;
  onUserRemoved?: () => any;
  stackLimit?: number;
}

export default function Presence({
  apiKey,
  appId,
  channelId,
  classSuffix,
  mode,
  position,
  overideNumber,
  onUserAdded,
  onUserRemoved,
  customLayout,
  onClick,
  stackLimit,
}: Props) {
  const [users, setUsers] = useState<any[]>([]);
  const url = `${
    /localhost/.test(push) ? "ws" : "wss"
  }://${push}?channelId=presence:${channelId}&apiKey=${apiKey}&appId=${appId}`;
  const { sendJsonMessage } = useWebSocket(url, {
    share: true,
    shouldReconnect: () => true,
    onMessage: (event) => {
      const data = event?.data ? JSON.parse(event?.data) : null;
      if (data && data.users) {
        if (data.users.length > users.length && onUserAdded) {
          onUserAdded();
        } else if (data.users.length < users.length && onUserRemoved) {
          onUserRemoved();
        }
        setUsers(data.users || 0);
      }
    },
    onClose: (event) => {
      console.error(event.reason);
    },
    onError: (event) => {},
  });

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
      stackLimit={stackLimit}
    />
  ) : (
    customLayout(users)
  );
}
