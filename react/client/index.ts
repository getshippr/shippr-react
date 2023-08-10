import { useState } from "react";
import shippr from "@shippr/client";

const init = (appId: string, apiKey: string) => {
  const client = shippr(appId, apiKey);
  return {
    useSharedState: (initValue: any, channelId: string) => {
      const [data, setData] = useState(initValue);
      debugger;
      const watcher = client.subscribe(channelId);
      watcher.on((data, err) => {
        if (!err) {
          setData(data);
        } else {
          console.log(err);
        }
      });

      const update = (newData: any) => {
        client.publish(channelId, newData);
      };

      return [data, update];
    },
  };
};

export { init };
