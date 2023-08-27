import { UserPresence } from "./components/helper";

export type ShipprHooks = {
  useSharedState: (initValue: any, channelId: string) => [any, Function];
  usePresence: (
    initValue: UserPresence[],
    channelId: string
  ) => [UserPresence[], Function, UserPresence[], UserPresence[]];
};
