import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/OnJava8/",

  lang: "zh-CN",
  title: "On Java 8",
  description: "《On Java 8》中文版",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
