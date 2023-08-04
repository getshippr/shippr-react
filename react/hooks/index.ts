import { useEffect, useState } from "react";
import { push } from "../client/hosts";
import useWebSocket from "react-use-websocket";

function useSharedState(initValue: any, channelId: string) {
  const [data, setData] = useState(initValue);
  const wsUrl = `wss://${push}?channelId=${channelId}&apiKey=&appId=demo`;
  const { sendJsonMessage } = useWebSocket(wsUrl, {
    share: true,
    shouldReconnect: () => true,
    onMessage: (event) => {
      const data = event?.data ? JSON.parse(event?.data) : null;
      if (data) {
        setData(data.value);
      }
    },
    onClose: (event) => {},
    onError: (event) => {},
  });

  const update = (newData: any) => {
    sendJsonMessage({ value: newData });
  };

  return [data, update];
}
export { useSharedState };
