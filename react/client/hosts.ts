const push = "push.getshippr.com";

const pushHttp = "https://push.getshippr.com";

const isLocalhost =
  process.env.NODE_ENV === "development" ||
  (typeof "window" !== "undefined"
    ? /localhost/.test(window.location.hostname)
    : false);

const pushWs = `${isLocalhost ? "ws" : "wss"}://push.getshippr.com`;

export { push, pushHttp, pushWs };
