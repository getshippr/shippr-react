import "./style.css";
import MultiCursorsWidget from "../../../react/components/MultiCursors";

interface MultiCursorsProps {
  /**
   * Name of your own cursor
   */
  name?: string;
  /**
   * Custom rendering
   */
  customLayout?: (users: any[]) => JSX.Element;
}

/**
 * Primary UI component for user interaction
 */
export const MultiCursors = ({
  name = "titi",
  customLayout,
  ...props
}: MultiCursorsProps) => {
  return (
    <div>
      <MultiCursorsWidget
        apiKey=""
        name={name}
        appId=""
        channel="multi-cursor-storybook"
        activated={true}
        customLayout={customLayout}
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
    </div>
  );
};
