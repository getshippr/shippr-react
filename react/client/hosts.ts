const push =
  process.env.NODE_ENV === "development"
    ? "localhost:8080"
    : "push.getshippr.com";

export { push };
