import "./style.css";
import MultiCursorsWidget from "../../../react/components/MultiCursors";
import ShipprProvider from "../../../react/components/ShipprProvider";

interface MultiCursorsProps {
  /**
   * Custom rendering
   */
  customLayout?: (user: { userId: string }) => JSX.Element;
}

/**
 * Primary UI component for user interaction
 */
export const MultiCursors = ({ customLayout, ...props }: MultiCursorsProps) => {
  return (
    <div>
      <ShipprProvider
        apiKey="prod_Mi88YInp22c1lPN8tyvb"
        appId="40CAF8OS"
        options={{ wsOptions: { debug: true } }}
      >
        <MultiCursorsWidget
          channelId="multi-cursor-storybook"
          customLayout={customLayout}
          setName={(user) => {
            return <>{user.userId}</>;
          }}
        >
          <div
            style={{
              width: "500px",
              height: "500px",
              background: "#dbdbdb",
              borderRadius: "5px",
            }}
          ></div>
        </MultiCursorsWidget>
      </ShipprProvider>
    </div>
  );
};
