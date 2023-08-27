import Widget from "./Widget";
import { useShipprConfig } from "../ShipprProvider";
import { init } from "../../client";

export interface Props {
  /**
   * Name of the channel that will be used
   */
  channelId: string;
  /**
   * Only support "basic" tailwind notification
   */
  template?: { type: string } & any;
  /**
   * Custom string appended for your own customization
   */
  classSuffix?: string;
  /**
   * if basic if used, provide {title,body}
   */
  initialData?: any;
  /**
   * if provided, this will overide the entire layout
   */
  customLayout?: (data: any) => JSX.Element;
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
