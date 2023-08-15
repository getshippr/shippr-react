const push = "push.getshippr.com";

const pushHttp = "https://push.getshippr.com";

const pushWs = `${
  process.env.NODE_ENV === "development" ? "ws" : "wss"
}://push.getshippr.com`;

export { push, pushHttp, pushWs };
