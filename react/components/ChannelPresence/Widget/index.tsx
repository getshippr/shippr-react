import { useEffect, useState } from "react";
import { UserPresence } from "../../helper";
import "./global.css";
import cx from "classnames";

export interface Props {
  mode?: string;
  classSuffix?: string;
  position?: string;
  onClick?: any;
  users: UserPresence[];
  overideNumber?: number;
  stackLimit?: number;

  showTooltip?: boolean;
  tooltipPosition?: "top" | "left" | "right" | "bottom";
  tooltipTrigger?: "click" | "hover";
  customTooltip?: (user: UserPresence) => JSX.Element;
  customUserLayout?: (user: UserPresence) => JSX.Element;
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

const Tooltip = ({
  user,
  children,
  showTooltip,
  tooltipPosition = "top",
  tooltipTrigger = "hover",
  customTooltip,
}: {
  user: UserPresence;
  children: JSX.Element;
  tooltipTrigger?: string;
  showTooltip?: boolean;
  tooltipPosition?: "top" | "left" | "right" | "bottom";
  customTooltip?: (user: UserPresence) => JSX.Element;
}) => {
  const position: any = {
    top: "#4b5563 transparent transparent transparent",
    bottom: "transparent transparent #4b5563 transparent",
    left: "transparent  transparent transparent #4b5563",
    right: "transparent  #4b5563 transparent transparent ",
  };
  const [show, setShow] = useState(false);

  return !showTooltip ? (
    children
  ) : (
    <div
      className={cx("relative cursor-pointer", {
        "group hover-trigger": tooltipTrigger === "hover",
      })}
      onClick={() => {
        if (tooltipTrigger === "click") {
          setShow(!show);
        }
      }}
    >
      {children}{" "}
      <div
        style={{ left: "50%", transform: "translateX(-50%)" }}
        className={cx(
          "absolute whitespace-nowrap   text-white text-xs  transition-opacity duration-200",
          {
            "opacity-0 group-hover:opacity-100": tooltipTrigger === "hover",
            "opacity-100": tooltipTrigger === "click" && show,
            "opacity-0": tooltipTrigger === "click" && !show,
            "bottom-1/2 mb-6": tooltipPosition === "top",
            "top-1/2 mt-6": tooltipPosition === "bottom",
            "-ml-20 -top-1/2 mt-2": tooltipPosition === "left",
            "ml-20 -top-1/2 mt-2": tooltipPosition === "right",
          }
        )}
      >
        <div className="w-full flex flex-wrap">
          {customTooltip ? (
            customTooltip(user)
          ) : (
            <div className="w-full flex flex-wrap bg-gray-600 p-2 rounded ">
              <div className="w-full flex flex-wrap ">
                <span className="w-full inline-block text-xs text-gray-300">
                  {user.userId}
                </span>
                <span className="w-full inline-block text-xs">
                  Viewed {user.connectionCount} times
                </span>
              </div>
              <div
                style={{
                  borderWidth: "3px",
                  borderColor: position[tooltipPosition] || "",
                  transform: "translateX(-50%)",
                }}
                className={cx("absolute z-50 w-0 h-0 ", {
                  "-bottom-1.5 left-1/2": tooltipPosition === "top",
                  "-top-1.5 left-1/2": tooltipPosition === "bottom",
                  "-right-2 top-1/2": tooltipPosition === "left",
                  "-left-0.5 top-1/2": tooltipPosition === "right",
                })}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function BasicPresence({
  classSuffix,
  mode,
  users,
  position,
  onClick,
  overideNumber,
  stackLimit,
  showTooltip,
  tooltipPosition,
  customTooltip,
  tooltipTrigger,
  customUserLayout,
}: Props) {
  const alignment = position === "vertical" ? "block" : "inline";
  const stackedClass = position === "vertical" ? "-mt-3" : "-mr-3";
  users =
    overideNumber && overideNumber > 0
      ? Array.from(Array(overideNumber).keys()).map((p, i) => {
          return {
            state: i % 2 ? "connected" : "disconnected",
            userId: "foo",
            updatedAt: 0,
            connectionCount: 34,
          };
        })
      : users;

  users.sort((a, b) => {
    return a.state === "connected" ? -1 : 1;
  });

  return mode === "stacked" ? (
    <div>
      {users
        .filter((p, i) => i < (stackLimit || 4))
        .map((p, i) => {
          return customUserLayout ? (
            <Tooltip
              user={p}
              tooltipTrigger={tooltipTrigger}
              showTooltip={showTooltip}
              customTooltip={customTooltip}
              tooltipPosition={tooltipPosition}
            >
              {customUserLayout(p)}
            </Tooltip>
          ) : (
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
              <Tooltip
                user={p}
                tooltipTrigger={tooltipTrigger}
                showTooltip={showTooltip}
                customTooltip={customTooltip}
                tooltipPosition={tooltipPosition}
              >
                <>
                  {" "}
                  <img
                    className={cx(
                      `${
                        classSuffix
                          ? `${classSuffix}-presence-element`
                          : "shippr-presence-element"
                      } ${
                        mode === "stacked" ? stackedClass : ""
                      } w-12 cursor-pointer shadow-md inline    rounded-full`,
                      {
                        "border-green-500": p.state === "connected",
                        "border-gray-300": p.state === "disconnected",
                      }
                    )}
                    style={{ borderWidth: "3px" }}
                    src={`https://source.boringavatars.com/${variants[i]}`}
                  />
                </>
              </Tooltip>
            </div>
          );
        })}
      {users.length > (stackLimit || 4) && (
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
            <span className="text-xs">+{users.length - (stackLimit || 4)}</span>
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
      <span className="text-xs ml-2 text-green-400">{users.length} Online</span>
    </div>
  );
}
