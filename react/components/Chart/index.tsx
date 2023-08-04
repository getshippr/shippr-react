import useWebSocket from "react-use-websocket";
import { useState } from "react";
import { push } from "../../client/hosts";
import {
  Chart as BizChart,
  View,
  Axis,
  Tooltip,
  LineChart,
  Legend,
  Coordinate,
  Annotation,
  Slider,
  Interaction,
  Facet,
  Line,
  Interval,
  Point,
  Area,
  Polygon,
  Schema,
  Path,
  Heatmap,
  Geom,
  LineAdvance,
  Effects,
  useView,
  useChartInstance,
  useRootChart,
} from "bizcharts";
import {
  Marker,
  Image,
  Canvas,
  Group,
  Circle,
  Ellipse,
  Rect,
  Text,
} from "bizcharts/lib/g-components";

import { IChartProps } from "bizcharts/lib/interface";

export interface Props {
  apiKey: string;
  appId: string;
  channelId: string;
  customLayout?: (data: any) => JSX.Element;
  template?: { type: string } & any;
  children?: any;
}

const Chart = (props: Props & IChartProps) => {
  const [chartData, setChartData] = useState<any>(props.data);
  const wsUrl = `wss://${push}?channelId=${props.channelId}&apiKey=${props.apiKey}&appId=${props.appId}`;
  useWebSocket(wsUrl, {
    share: true,
    shouldReconnect: () => true,
    onMessage: (event) => {
      const out = event?.data ? JSON.parse(event?.data) : null;
      if (out) {
        //setChartData(out);
      }
    },
    onClose: (event) => {},
    onError: (event) => {},
  });

  return props.children && <BizChart {...props}>{props.children}</BizChart>;
};

export {
  Chart,
  View,
  Axis,
  Tooltip,
  LineChart,
  Legend,
  Coordinate,
  Annotation,
  Slider,
  Interaction,
  Facet,
  Line,
  Interval,
  Point,
  Area,
  Polygon,
  Schema,
  Path,
  Heatmap,
  Geom,
  LineAdvance,
  Effects,
  useView,
  useChartInstance,
  useRootChart,
  Marker,
  Image,
  Canvas,
  Group,
  Circle,
  Ellipse,
  Rect,
  Text,
};
