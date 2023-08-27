import { SuperSocketOptions } from "@shippr/supersocket/lib/esm/types/supersocket";
import { createContext, useContext } from "react";

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

export default function ShipprProvider({
  apiKey,
  appId,
  options,
  children,
}: Props) {
  return (
    <ConfigContext.Provider value={{ appId, apiKey, options }}>
      {children}
    </ConfigContext.Provider>
  );
}
