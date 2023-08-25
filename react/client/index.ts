import { useEffect, useState } from "react";
import shippr from "@shippr/client";
import { SuperSocketOptions } from "@shippr/supersocket/lib/esm/types/supersocket";
import { UserPresence } from "../components/helper";

const init = (
  appId: string,
  apiKey: string,
  options?: { wsOptions?: SuperSocketOptions; userId?: string }
) => {
  const client = shippr(appId, apiKey, options);
  return {
    useSharedState: (initValue: any, channelId: string) => {
      const [data, setData] = useState(initValue);
      useEffect(() => {
        let watcher: {
          on: (cb: any) => void;
          getSocket: () => any;
          disconnect: () => void;
        } | null = null;
        const fetch = async () => {
          watcher = await client.subscribe(channelId);
          watcher.on((data: any, err: any) => {
            if (!err) {
              setData(data);
            } else {
              console.log(err);
            }
          });
        };
        fetch();
        return () => {
          watcher?.disconnect();
        };
      }, []);

      const update = (newData: any) => {
        client.publish(channelId, newData);
      };

      return [data, update];
    },
    usePresence: (
      initValue: UserPresence[],
      channelId: string
    ): [UserPresence[], Function] => {
      const [users, setUsers] = useState<UserPresence[]>(initValue || []);

      useEffect(() => {
        let watcher: {
          on: (cb: any) => void;
          getSocket: () => any;
          disconnect: () => void;
        } | null = null;
        const fetch = async () => {
          watcher = await client.subscribe(channelId);
          watcher.on((newData: any, err: any) => {
            if (!err) {
              const update: UserPresence[] = newData ? newData.users || [] : [];
              setUsers(update);
            } else {
              console.log(err);
            }
          });
        };
        fetch();
        return () => {
          watcher?.disconnect();
        };
      }, []);

      const update = (newData: any) => {
        client.publish(channelId, newData);
      };

      return [users || [], update];
    },
  };
};

export { init };
