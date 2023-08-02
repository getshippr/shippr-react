import SharedContainer from "./SharedContainer";

export interface Props {
  userId?: string;
  activated?: boolean;
  channel?: string;
  testMode?: boolean;
  children?: any;
  apiKey?: string;
  appId?: string;
  name?: string;
  customLayout?: (user: any) => JSX.Element;
}

export default function MultiCursors({
  children,
  activated,
  channel,
  userId,
  testMode,
  apiKey,
  name,
  appId,
  customLayout,
}: Props) {
  return activated ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <SharedContainer
        channel={channel}
        name={name}
        userId={userId}
        apiKey={apiKey}
        appId={appId}
        singlePropagation={testMode}
        customLayout={customLayout}
      >
        {children}
      </SharedContainer>
    </div>
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
