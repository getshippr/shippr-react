import "./global.css";
import cx from "classnames";

export interface Props {
  mode?: string;
  classSuffix?: string;
  position?: string;
  onClick?: any;
  users: any[];
  overideNumber?: number;
  stackLimit?: number;
}

const variants = [
  "marble",
  "beam",
  "pixel",
  "sunset",
  "ring",
  "bauhaus",
  "pixel",
  "sunset",
  "ring",
  "bauhaus",
  "pixel",
  "sunset",
  "ring",
  "bauhaus",
  "pixel",
  "sunset",
  "ring",
  "bauhaus",
  "pixel",
  "sunset",
  "ring",
  "bauhaus",
];

export default function BasicPresence({
  classSuffix,
  mode,
  users,
  position,
  onClick,
  overideNumber,
  stackLimit,
}: Props) {
  const alignment = position === "vertical" ? "block" : "inline";
  const stackedClass = position === "vertical" ? "-mt-3" : "-mr-3";
  const members = overideNumber
    ? Array.from(Array(overideNumber).keys())
    : users;
  return mode === "stacked" ? (
    <div>
      {members
        .filter((p, i) => i < (stackLimit || 4))
        .map((p, i) => {
          return (
            <div
              key={i}
              className={`${mode === "stacked" ? alignment : "inline-flex"} ${
                classSuffix
                  ? `${classSuffix}-presence-container`
                  : "shippr-presence-container"
              }`}
              onClick={() => {
                return onClick(p.userId);
              }}
            >
              <img
                className={cx(
                  `${
                    classSuffix
                      ? `${classSuffix}-presence-element`
                      : "shippr-presence-element"
                  } ${
                    mode === "stacked" ? stackedClass : ""
                  } w-12 cursor-pointer shadow-md inline border-2  border-blue-300  rounded-full`
                )}
                src={`https://source.boringavatars.com/${variants[i]}`}
              />
            </div>
          );
        })}
      {members.length > (stackLimit || 4) && (
        <div
          className={`${mode === "stacked" ? alignment : "inline-flex"} ${
            classSuffix
              ? `${classSuffix}-presence-container`
              : "shippr-presence-container"
          }`}
        >
          <div
            className={cx(
              `${
                classSuffix
                  ? `${classSuffix}-presence-element`
                  : "shippr-presence-element"
              } ${
                mode === "stacked" ? stackedClass : ""
              } cursor-pointer shadow-md inline-flex items-center justify-center  w-12  h-12  border-2 -mr-3 bg-blue-400 text-blue-100  border-blue-500 rounded-full`
            )}
          >
            <span className="text-xs">
              +{members.length - (stackLimit || 4)}
            </span>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div
      className={cx(
        `${
          classSuffix
            ? `${classSuffix}-presence-container`
            : "shippr-presence-container"
        } flex items-center`
      )}
      onClick={onClick}
    >
      <div className="inline-block rounded-full p-1 text-green-400 bg-green-400/10">
        <div className={`h-1.5 w-1.5 rounded-full bg-current`}></div>
      </div>
      <span className="text-xs ml-2 text-green-400">
        {members.length} Online
      </span>
    </div>
  );
}
