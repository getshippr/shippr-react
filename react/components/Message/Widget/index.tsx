import { useEffect, useState } from "react";
import "./global.css";
import cx from "classnames";

export interface Props {
  template?: any;
  data?: any;
  classSuffix?: string;
  customLayout?: (data: any) => JSX.Element;
}

export default function Widget({
  classSuffix,
  customLayout,
  template,
  data,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setOpen(true);
    }
  }, [data]);

  if (customLayout) {
    return customLayout(data);
  } else if (template.type === "basic") {
    return (
      open && (
        <div
          className={` ${
            classSuffix
              ? `${classSuffix}-message-container`
              : "shippr-message-container"
          } pointer-events-auto  p-4 w-80 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex items-start">
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p
                className={`${
                  classSuffix
                    ? `${classSuffix}-message-title`
                    : "shippr-message-title"
                } text-sm font-medium text-gray-900 `}
              >
                {data?.title}
              </p>
              <p
                className={` ${
                  classSuffix
                    ? `${classSuffix}-message-body`
                    : "shippr-message-body"
                } mt-1 text-sm text-gray-500`}
              >
                {data?.body}
              </p>
            </div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}
