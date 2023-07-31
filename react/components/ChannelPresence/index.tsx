import useWebSocket from "react-use-websocket"
import "./global.css"

export interface Props {
  animate: boolean
  apiKey: string
  appId: string
  channelId: string
}

import { useEffect, useState } from "react"
import cx from "classnames"
import { kirby } from "../../client/hosts"

export default function Presence({ animate, apiKey, appId, channelId }: Props) {
  const [online, setOnline] = useState(0)

  const { sendJsonMessage } = useWebSocket(
    `wss:${kirby}?channelId=presence:${channelId}&apiKey=${apiKey}&appId=${appId}`,
    {
      share: true,
      shouldReconnect: () => true,
      onMessage: (event) => {
        const data = event?.data ? JSON.parse(event?.data) : null
        if (data) {
          setOnline(data.connected || 0)
        }
      },
      onClose: (event) => {},
      onError: (event) => {},
    },
  )

  const variants = ["marble", "beam", "pixel", "sunset", "ring", "bauhaus"]

  useEffect(() => {
    sendJsonMessage({ type: "presence" })
  }, [])

  return (
    <div>
      {Array.from(Array(online > 4 ? 4 : online).keys()).map((p, i) => {
        return (
          <div key={i} className="inline">
            {" "}
            <img
              className={cx(
                "cursor-pointer shadow-md inline w-8 border-2 -mr-3 border-blue-300 rounded-full",
                {
                  "hover:-translate-y-1": animate,
                },
              )}
              src={`https://source.boringavatars.com/${variants[i]}`}
            />
          </div>
        )
      })}
      {online > 4 && (
        <div className="inline">
          <div
            className={cx(
              "cursor-pointer shadow-md inline-flex items-center justify-center w-8 h-8 border-2 -mr-3 bg-blue-400 text-blue-100 text-xs border-blue-500 rounded-full",
              {
                "hover:-translate-y-1": animate,
              },
            )}
          >
            +{online - 4}
          </div>
        </div>
      )}
    </div>
  )
}
