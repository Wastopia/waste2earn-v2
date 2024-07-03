import { formatter } from "@lingui/format-json";

export default {
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}",
      include: ["<rootDir>/src"],
    },
  ],
  compileNamespace: "cjs",
  fallbackLocales: {
    default: "en-US",
  },
  format: formatter({ lineNumbers: true, style: "minimal" }),
  locales: ["en-US"],
  orderBy: "messageId",
  rootDir: ".",
  runtimeConfigModule: ["@lingui/core", "i18n"],
  sourceLocale: "en-US",
};
