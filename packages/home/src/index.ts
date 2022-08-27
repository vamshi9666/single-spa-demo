import { registerApplication, start } from "single-spa";

registerApplication(
  "filter",
  // @ts-ignore
  () => import("home-nav/Filter"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "apiItems",
  // @ts-ignore
  () => import("home-body/ApiContent"),
  (location) => location.pathname.startsWith("/")
);

start();
