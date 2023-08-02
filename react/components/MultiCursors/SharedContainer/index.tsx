import { v4 } from "uuid";
import { useCallback, useEffect, useRef, useState } from "react";
import useWebSocket from "react-use-websocket";
import {
  colorPalette,
  getCursorColor,
  getRandomIntegerInRange,
} from "../../helper";
import { kirby } from "../../../client/hosts";
import "./style.css";

export interface Props {
  userId?: string;
  channel?: string;
  singlePropagation?: boolean;
  children?: any;
  apiKey?: string;
  appId?: string;
  name?: string;
  customLayout?: (user: any) => JSX.Element;
}

export default function SharedContainer({
  children,
  channel,
  singlePropagation,
  userId,
  name,
  apiKey,
  appId,
  customLayout,
}: Props) {
  const shouldWait = useRef<boolean>(false);
  const [connectedToCanvas, setConnectedToCanvas] = useState<any[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setCurrentUserId(v4());
    } else {
      setCurrentUserId(userId);
    }
  }, []);

  const { sendJsonMessage } = useWebSocket(
    `wss:${kirby}?channelId=${channel}&singlePropagation=${
      singlePropagation || ""
    }&apiKey=${apiKey}&appId=${appId}&userId=${currentUserId}&name=${
      name || ""
    }`,
    {
      shouldReconnect: (closeEvent) => true,
      share: true,
      onOpen: () => {
        const random = getRandomIntegerInRange(0, 50);
        sendJsonMessage({
          type: "position",
          userId: currentUserId,
          position: {
            x: 100,
            y: 100,
            color: colorPalette[random],
            oColor: colorPalette[random],
          },
        });
      },
      onMessage: (event) => {
        const data = event?.data ? JSON.parse(event?.data) : null;
        if (data) {
          let update = JSON.parse(JSON.stringify(connectedToCanvas));
          if (!update.find((m: any) => m.userId === data.userId)) {
            update.push(data);
          } else {
            update = update.map((p: any) => {
              if (p.userId === data.userId) {
                p.position = data.position;
              }
              return p;
            });
          }

          setConnectedToCanvas(update);
        }
      },
      onClose: () => {},
    }
  );

  const update = (x: any, y: any, color: any, oColor: any) => {
    sendJsonMessage({
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
        const originColor = connectedToCanvas.find(
          (p: any) => p.userId === currentUserId
        )?.position?.oColor;
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
          throttle(update, 50, mouseX, mouseY, color, originColor);
        }
      }}
    >
      <div
        className="my-custom-cursor z-50 "
        style={{ cursor: "none !important" }}
        id={`my-custom-cursor-${currentUserId}`}
      >
        {customLayout ? (
          customLayout({ name, currentUserId })
        ) : (
          <>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              style={{ transform: "rotate(-120deg)" }}
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
            <span className="text-xs">{name}</span>
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
                  <span className="text-xs">{p.name}</span>
                </>
              )}
            </div>
          );
        })}

      {children}
    </div>
  );
}
