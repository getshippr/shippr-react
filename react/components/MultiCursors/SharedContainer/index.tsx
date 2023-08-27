import { v4 } from "uuid";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  colorPalette,
  getCursorColor,
  getRandomIntegerInRange,
} from "../../helper";
import "./style.css";
import { useShipprConfig } from "../../ShipprProvider";
import init, { ShipprClient, ShipprSub } from "@shippr/client";
import SuperSocket from "@shippr/supersocket";

export interface Props {
  channel: string;
  children?: any;
  customLayout?: (user: { userId: string }) => JSX.Element;
  setName?: (user: { userId: string }) => JSX.Element;
}

export default function SharedContainer({
  children,
  channel,
  customLayout,
  setName,
}: Props) {
  const shouldWait = useRef<boolean>(false);
  const [connectedToCanvas, setConnectedToCanvas] = useState<any[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const { appId, apiKey, options } = useShipprConfig();
  const [socket, setSocket] = useState<SuperSocket | null>(null);

  useEffect(() => {
    const fetch = async () => {
      if (!options?.userId) {
        setCurrentUserId(v4());
      } else {
        setCurrentUserId(options.userId);
      }
      const client = init(appId, apiKey, options);
      const watcherInit = await client.subscribe(channel);
      const socketInstance = watcherInit.getSocket();
      watcherInit.on((data, err) => {
        if (err) {
          console.debug("error inside multicursor", err);
        } else {
          setConnectedToCanvas((prevValue) => {
            if (!prevValue.find((m: any) => m.userId === data.userId)) {
              return [...prevValue, data];
            } else {
              prevValue = prevValue.map((p: any) => {
                if (p.userId === data.userId) {
                  p.position = data.position;
                }
                return p;
              });
              return prevValue;
            }
          });
        }
      });
      if (socketInstance) {
        //@ts-ignore
        setSocket(socketInstance);
      }
    };
    fetch();
  }, []);

  const update = (x: any, y: any, color: any, oColor: any) => {
    socket?.send({
      type: "multiposition",
      userId: currentUserId,
      position: { x, y, color, oColor },
    });
  };

  const throttle = useCallback(
    (callback: Function, delay = 1000, ...args: any[]) => {
      if (shouldWait.current) return;
      callback(...args);
      shouldWait.current = true;
      setTimeout(() => {
        shouldWait.current = false;
      }, delay);
    },
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        cursor: "none",
      }}
      id={`shared-container-${currentUserId}`}
      onMouseMove={(event) => {
        const random = getRandomIntegerInRange(0, 50);

        const originColor =
          connectedToCanvas.find((p: any) => p.userId === currentUserId)
            ?.position?.oColor || colorPalette[random];
        const container = document.getElementById(
          `shared-container-${currentUserId}`
        );
        const customCursor = document.getElementById(
          `my-custom-cursor-${currentUserId}`
        );

        if (container && customCursor) {
          // Get the mouse coordinates relative to the container
          const mouseX = event.clientX - container.getBoundingClientRect().left;
          const mouseY = event.clientY - container.getBoundingClientRect().top;
          const color = getCursorColor(
            event,
            container,
            customCursor,
            originColor
          );
          customCursor.style.color = getCursorColor(
            event,
            container,
            customCursor,
            originColor
          );
          customCursor.style.left = `${mouseX}px`;
          customCursor.style.top = `${mouseY}px`;
          customCursor.style.cursor = `none !important`;
          customCursor.style.visibility = `visible !important`;

          throttle(update, 50, mouseX, mouseY, color, originColor);
        }
      }}
    >
      <div
        className="my-custom-cursor z-50 "
        style={{
          cursor: "none !important",
        }}
        id={`my-custom-cursor-${currentUserId}`}
      >
        {customLayout ? (
          customLayout({ userId: currentUserId || "" })
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              style={{ transform: "rotate(-120deg)" }}
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
            {setName && (
              <span className="text-xs">
                {setName({ userId: currentUserId || "" })}
              </span>
            )}
          </>
        )}
      </div>

      {connectedToCanvas
        .filter((p: any, i) => {
          return p.userId !== currentUserId;
        })
        .map((p: any, i) => {
          return (
            <div
              key={i}
              className="my-custom-cursor z-50 "
              style={{
                cursor: "none",
                top: `${p.position?.y || 0}px`,
                left: `${p.position?.x || 0}px`,
                color: p.position?.color,
              }}
            >
              {customLayout ? (
                customLayout(p)
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    style={{ transform: "rotate(-120deg)" }}
                  >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                  {setName && (
                    <span className="text-xs">
                      {setName({ userId: p.userId || "" })}
                    </span>
                  )}
                </>
              )}
            </div>
          );
        })}

      {children}
    </div>
  );
}
