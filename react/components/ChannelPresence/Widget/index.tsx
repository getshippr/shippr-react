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
  setUserImg?: (user: UserPresence) => string;
  setUserName?: (user: UserPresence) => string;
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
  setUserName,
  children,
  showTooltip,
  tooltipPosition = "top",
  tooltipTrigger = "hover",
  customTooltip,
  mode,
  position,
}: {
  user: UserPresence;
  setUserName?: (user: UserPresence) => string;
  children: JSX.Element;
  tooltipTrigger?: string;
  showTooltip?: boolean;
  tooltipPosition?: "top" | "left" | "right" | "bottom";
  customTooltip?: (user: UserPresence) => JSX.Element;
  mode: string;
  position?: string;
}) => {
  const positionClass: any = {
    top: "#4b5563 transparent transparent transparent",
    bottom: "transparent transparent #4b5563 transparent",
    left: "transparent  transparent transparent #4b5563",
    right: "transparent  #4b5563 transparent transparent ",
  };
  const [show, setShow] = useState(false);
  const stackedClass = position === "vertical" ? "my-0.5" : "mx-1";

  return (
    <span
      className={cx(
        `cursor-pointer h-12 w-12 ${mode === "stacked" ? stackedClass : ""}`,
        {
          "group hover-trigger": tooltipTrigger === "hover",
          relative: showTooltip,
        }
      )}
      onClick={() => {
        if (showTooltip && tooltipTrigger === "click") {
          setShow(!show);
        }
      }}
      onMouseOver={() => {
        if (showTooltip && tooltipTrigger === "hover") {
          setShow(true);
        }
      }}
      onMouseLeave={() => {
        if (showTooltip && tooltipTrigger === "hover") {
          setShow(false);
        }
      }}
    >
      {children}{" "}
      {showTooltip && show && (
        <div
          style={{ left: "50%", transform: "translateX(-50%)" }}
          className={cx(
            "absolute z-50  whitespace-nowrap   text-white text-xs  transition-opacity duration-200",
            {
              "opacity-100": tooltipTrigger === "click" && show,
              "opacity-0": tooltipTrigger === "click" && !show,
              "bottom-1/2 mb-7": tooltipPosition === "top",
              "top-1/2 mt-7": tooltipPosition === "bottom",

              "-ml-28 -top-0 ":
                tooltipPosition === "left" && position !== "vertical",
              "-ml-28 -mt-2 -top-1/2 ":
                tooltipPosition === "left" && position === "vertical",

              "ml-28  -top-1 ":
                tooltipPosition === "right" && position !== "vertical",
              "ml-28 -mt-2 -top-1/2 ":
                tooltipPosition === "right" && position === "vertical",
            }
          )}
        >
          <div className="w-full flex flex-wrap">
            {customTooltip ? (
              customTooltip(user)
            ) : (
              <div className="w-full flex flex-wrap bg-gray-600 p-2 rounded ">
                <div className="w-full flex flex-wrap ">
                  <span className="z-50 w-40 truncate inline-block text-xs text-gray-300">
                    {setUserName && setUserName(user)
                      ? setUserName(user)
                      : user.userId}
                  </span>
                  <span className="w-full inline-block text-xs">
                    Viewed {user.connectionCount} times
                  </span>
                </div>
                <div
                  style={{
                    borderWidth: "3px",
                    borderColor: positionClass[tooltipPosition] || "",
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
      )}
    </span>
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
  setUserImg,
  setUserName,
}: Props) {
  const alignment = position === "vertical" ? "block" : "inline-flex flex-wrap";
  const stackedClass = position === "vertical" ? "my-0.5" : "mx-1";

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
              mode={mode}
              position={position}
              setUserName={setUserName}
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
                return onClick ? onClick(p.userId) : null;
              }}
            >
              <Tooltip
                user={p}
                tooltipTrigger={tooltipTrigger}
                showTooltip={showTooltip}
                customTooltip={customTooltip}
                tooltipPosition={tooltipPosition}
                mode={mode}
                position={position}
                setUserName={setUserName}
              >
                <>
                  {" "}
                  <img
                    className={cx(
                      `${
                        classSuffix
                          ? `${classSuffix}-presence-element`
                          : "shippr-presence-element"
                      }  w-12 cursor-pointer shadow-md inline rounded-full`,
                      {
                        "border-green-500": p.state === "connected",
                        "border-gray-300": p.state === "disconnected",
                      }
                    )}
                    style={{ borderWidth: "3px" }}
                    src={
                      setUserImg && setUserImg(p)
                        ? setUserImg(p)
                        : `https://source.boringavatars.com/${variants[i]}`
                    }
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
              } cursor-pointer text-xs shadow-md inline-flex items-center justify-center  w-12  h-12 bg-blue-400 text-blue-100  border-blue-500 rounded-full`
            )}
            style={{ borderWidth: "3px" }}
          >
            +{users.length - (stackLimit || 4)}
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
