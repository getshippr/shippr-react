import Widget from "./Widget";
import { useShipprConfig } from "../ShipprProvider";
import { init } from "../../client";

export interface Props {
  channelId: string;
  customLayout?: (data: any) => JSX.Element;
  template?: { type: string } & any;
  classSuffix?: string;
  initialData?: any;
}

export default function Message({
  channelId,
  customLayout,
  classSuffix,
  template,
  initialData,
}: Props) {
  const { appId, apiKey, options } = useShipprConfig();
  const { useSharedState } = init(appId, apiKey, options);
  const [data] = useSharedState(initialData, channelId);
  return (
    <Widget
      customLayout={customLayout}
      template={template}
      data={data}
      classSuffix={classSuffix}
    />
  );
}
