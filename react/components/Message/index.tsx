import useWebSocket from "react-use-websocket";
import { useState } from "react";
import { push } from "../../client/hosts";
import Widget from "./Widget";

export interface Props {
  apiKey: string;
  appId: string;
  channelId: string;
  customLayout?: (data: any) => JSX.Element;
  template?: { type: string } & any;
  classSuffix?: string;
  initialData?: any;
}

export default function Message({
  apiKey,
  appId,
  channelId,
  customLayout,
  classSuffix,
  template,
  initialData,
}: Props) {
  const [data, setData] = useState<any>(initialData);

  const wsUrl = `wss://${push}?channelId=${channelId}&apiKey=${apiKey}&appId=${appId}`;
  useWebSocket(wsUrl, {
    share: true,
    shouldReconnect: () => true,
    onMessage: (event) => {
      const data = event?.data ? JSON.parse(event?.data) : null;
      if (data) {
        setData(data);
      }
    },
    onClose: (event) => {},
    onError: (event) => {},
  });

  return (
    <Widget
      customLayout={customLayout}
      template={template}
      data={data}
      classSuffix={classSuffix}
    />
  );
}
