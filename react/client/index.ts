import { useEffect, useState } from "react";
import shippr, { ShipprClient } from "@shippr/client";
import { SuperSocketOptions } from "@shippr/supersocket/lib/esm/types/supersocket";
import { UserPresence } from "../components/helper";

const init = (
  appId: string,
  apiKey: string,
  options?: { wsOptions?: SuperSocketOptions; userId?: string }
): ShipprHooks => {
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
    ): [UserPresence[], Function, UserPresence[], UserPresence[]] => {
      const [users, setUsers] = useState<UserPresence[]>(initValue || []);
      const [addedUsers, setAddedUsers] = useState<UserPresence[]>([]);
      const [removedUsers, setRemovedUsers] = useState<UserPresence[]>([]);

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
              setUsers((prevValue) => {
                const added = update
                  .filter((p) => p.state === "connected")
                  .filter(
                    (m) =>
                      !prevValue
                        .filter((s) => s.state === "connected")
                        .find((l) => l.userId === m.userId)
                  );

                const removed = update.filter((k) =>
                  prevValue
                    .filter(
                      (m) =>
                        update.find(
                          (l) =>
                            l.userId === m.userId && l.state === "disconnected"
                        ) && m.state === "connected"
                    )
                    .map((p) => p.userId)
                    .includes(k.userId)
                );
                setAddedUsers(added);
                setRemovedUsers(removed);
                return update;
              });
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

      return [users || [], update, addedUsers, removedUsers];
    },
  };
};

export { init };
