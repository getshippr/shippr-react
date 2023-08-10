const push =
  process.env.NODE_ENV === "development"
    ? "localhost:8080"
    : "push.getshippr.com";

const pushHttp = "http://push.getshippr.com";

const pushWs =
  process.env.NODE_ENV === "development"
    ? "ws://localhost:8080"
    : "wss://push.getshippr.com";

export { push, pushHttp, pushWs };
