import SharedContainer from "./SharedContainer";

export interface Props {
  activated?: boolean;
  channel: string;
  testMode?: boolean;
  children?: any;
  customLayout?: (user: { userId: string }) => JSX.Element;
  setName?: (user: { userId: string }) => JSX.Element;
}

export default function MultiCursors({
  children,
  activated,
  channel,
  customLayout,
  setName,
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
        customLayout={customLayout}
        setName={setName}
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
