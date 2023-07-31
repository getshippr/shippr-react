import "./global.css";
export interface Props {
    animate: boolean;
    apiKey: string;
    appId: string;
    channelId: string;
}
export default function Presence({ animate, apiKey, appId, channelId }: Props): import("react/jsx-runtime").JSX.Element;
