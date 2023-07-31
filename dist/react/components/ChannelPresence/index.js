import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime"
import useWebSocket from "react-use-websocket"
import "./global.css"
import { useState } from "react"
import cx from "classnames"
import { kirby } from "../../client/hosts"
export default function Presence({ animate, apiKey, appId, channelId }) {
  const [online, setOnline] = useState(0)
  useWebSocket(`wss:${kirby}?channelId=presence:${channelId}&apiKey=${apiKey}&appId=${appId}`, {
    share: true,
    shouldReconnect: () => true,
    onMessage: (event) => {
      debugger
      console.log("onmessage", event)
      const data = (event === null || event === void 0 ? void 0 : event.data)
        ? JSON.parse(event === null || event === void 0 ? void 0 : event.data)
        : null
      if (data) {
        setOnline(data.connected || 0)
      }
    },
    onClose: (event) => {
      console.log("onClose", event)
      debugger
    },
    onError: (event) => {
      console.log("onError", event)
      debugger
    },
  })
  const variants = ["marble", "beam", "pixel", "sunset", "ring", "bauhaus"]
  return _jsxs("div", {
    children: [
      Array.from(Array(online > 4 ? 4 : online).keys()).map((p, i) => {
        return _jsx(
          "div",
          {
            className: "inline",
            children: _jsx("img", {
              className: cx(
                "cursor-pointer shadow-md inline w-8 border-2 -mr-3 border-blue-300 rounded-full",
                {
                  "hover:-translate-y-1": animate,
                },
              ),
              src: `https://source.boringavatars.com/${variants[i]}`,
            }),
          },
          i,
        )
      }),
      online > 4 &&
        _jsx("div", {
          className: "inline",
          children: _jsxs("div", {
            className: cx(
              "cursor-pointer shadow-md inline-flex items-center justify-center w-8 h-8 border-2 -mr-3 bg-blue-400 text-blue-100 text-xs border-blue-500 rounded-full",
              {
                "hover:-translate-y-1": animate,
              },
            ),
            children: ["+", online - 4],
          }),
        }),
    ],
  })
}
//# sourceMappingURL=index.js.map
