import { SuperSocketOptions } from "@shippr/supersocket/lib/esm/types/supersocket";
import { createContext, useContext } from "react";
import { init } from "../../client";
import { ShipprHooks } from "../../types";

export interface Props {
  /**
   * Shippr API key
   */
  apiKey: string;
  /**
   * Shippr application ID
   */
  appId: string;
  /**
   * Options
   */
  options?: { wsOptions?: SuperSocketOptions; userId?: string };

  children: JSX.Element;
}

const ConfigContext = createContext<{
  appId: string;
  apiKey: string;
  options?: { wsOptions?: SuperSocketOptions; userId?: string };
  client?: ShipprHooks;
} | null>(null);

export const useShipprConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error(
      "Component or application must be wrapped by a ShipprProvider"
    );
  }
  return context;
};

export const usePresence = (initValue: any, channelId: string) => {
  const context = useContext(ConfigContext);
  if (!context || !context?.client?.usePresence) {
    throw new Error(
      "Component or application must be wrapped by a ShipprProvider"
    );
  }
  return context.client?.usePresence(initValue, channelId);
};

export const useSharedState = (initValue: any, channelId: string) => {
  const context = useContext(ConfigContext);
  if (!context || !context?.client?.useSharedState) {
    throw new Error(
      "Component or application must be wrapped by a ShipprProvider"
    );
  }
  return context.client?.useSharedState(initValue, channelId);
};

export default function ShipprProvider({
  apiKey,
  appId,
  options,
  children,
}: Props) {
  const client = init(appId, apiKey, options);
  return (
    <ConfigContext.Provider value={{ appId, apiKey, options, client }}>
      {children}
    </ConfigContext.Provider>
  );
}
