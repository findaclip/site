import { defineNuxtPlugin } from "#app";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import * as pkg from "~~/package.json";

export default defineNuxtPlugin((nuxtApp) => {
  const release = `${pkg.name}@${pkg.version}`;
  const environment = nuxtApp.$config.ENV;

  Sentry.init({
    dsn: "https://0e71bca9b3ff47a69ebbaf07782c31f9@o1227417.ingest.sentry.io/6373051",
    release,
    environment,
    integrations: [
      new Integrations.BrowserTracing({
        tracingOrigins: ["localhost", "findaclip.netlify.app", /^\//],
      }),
    ],
    sampleRate: 1,
    tracesSampleRate: 1,
  });
});
