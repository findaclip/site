import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt", "nuxt-windicss"],
  modules: ["@nuxtjs/color-mode"],
  head: {
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
    meta: [
      { name: "msapplication-TileColor", content: "#b91d47" },
      { name: "theme-color", content: "#ffffff" },
    ],
  },

  css: ["assets/css/base.scss"],
  colorMode: {
    classSuffix: "",
  },
});
