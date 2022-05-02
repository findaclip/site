<script setup lang="ts">
useHead({
  titleTemplate: "Find a Clip - %s",
  htmlAttrs: { lang: "en" },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: "Find a Clip" },
    { name: "msapplication-TileColor", content: "#b91d47" },
    { name: "theme-color", content: "#ffffff" },
  ],
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
    { name: "msapplication-TileColor", content: "#b91d47" },
    { name: "theme-color", content: "#ffffff" },
  ],
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>
