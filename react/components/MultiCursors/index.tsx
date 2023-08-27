import SharedContainer from "./SharedContainer";

export interface Props {
  /**
   * Name of the channel that will be used
   */
  channelId: string;
  children?: any;
  /**
   * if provided, this will overide the entire layout
   */
  customLayout?: (user: { userId: string }) => JSX.Element;
  /*Method called to customize the name of the cursor
   */
  setName?: (user: { userId: string }) => JSX.Element;
}

export default function MultiCursors({
  children,
  channelId,
  customLayout,
  setName,
}: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <SharedContainer
        channel={channelId}
        customLayout={customLayout}
        setName={setName}
      >
        {children}
      </SharedContainer>
    </div>
  );
}
