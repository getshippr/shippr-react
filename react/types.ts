import { UserPresence } from "./components/helper";

export type ShipprHooks = {
  useSharedState: (
    initValue: any,
    channelId: string
  ) => [any, ((data: any) => void) | undefined];
  usePresence: (
    initValue: UserPresence[],
    channelId: string
  ) => [UserPresence[], Function, UserPresence[], UserPresence[]];
};
