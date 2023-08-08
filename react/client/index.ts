import { push, pushHttp, pushWs } from "./hosts";
import ReconnectingWebSocket from "reconnecting-websocket";
import EventEmitter2 from "eventemitter2";

const publish = async (
  appId: string,
  apiKey: string,
  channelId: string,
  data: any
) => {
  return fetch(
    `${pushHttp}/hooks/${channelId}?apiKey=${apiKey}&appId=${appId}`,
    {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data || {}),
    }
  );
};

const createSocket = (channelId: string, apiKey: string, appId: string) => {
  return new ReconnectingWebSocket(
    `${pushWs}?apiKey=${apiKey}&appId=${appId}&channelId=${channelId}`
  );
};

type DataCallBack = (data: any, err: any) => void;

const init = (appId: string, apiKey: string) => {
  return {
    subscribe: (channelId: string) => {
      const socket = createSocket(channelId, apiKey, appId);
      return {
        on: (cb: DataCallBack) => {
          socket.addEventListener("message", (event) => {
            cb(event.data ? JSON.parse(event.data) : "null", null);
          });
          socket.addEventListener("error", (error) => {
            cb(null, error);
          });
        },
      };
    },
    publish: (channelId: string, data: any) => {
      return publish(appId, apiKey, channelId, data);
    },
  };
};

export { init };
