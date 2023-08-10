import { useEffect, useState } from "react";
import shippr from "@shippr/client";

const init = (appId: string, apiKey: string) => {
  const client = shippr(appId, apiKey);
  return {
    useSharedState: (initValue: any, channelId: string) => {
      const [data, setData] = useState(initValue);
      useEffect(() => {
        const fetch = async () => {
          const watcher = await client.subscribe(channelId);
          watcher.on((data, err) => {
            if (!err) {
              setData(data);
            } else {
              console.log(err);
            }
          });
          if (/presence:/.test(channelId)) {
            client.publish(channelId, { type: "presence" });
          }
        };
        fetch();
      }, []);

      const update = (newData: any) => {
        client.publish(channelId, newData);
      };

      return [data, update];
    },
    usePresence: (initValue: any, channelId: string) => {
      const [data, setData] = useState<string[]>(initValue);
      useEffect(() => {
        const fetch = async () => {
          const watcher = await client.subscribe(channelId);
          watcher.on((data, err) => {
            if (!err) {
              setData(data ? data.users || [] : []);
            } else {
              console.log(err);
            }
          });
          client.publish(channelId, { type: "presence" });
        };
        fetch();
      }, []);

      const update = (newData: any) => {
        client.publish(channelId, newData);
      };

      return [data, update];
    },
  };
};

export { init };
