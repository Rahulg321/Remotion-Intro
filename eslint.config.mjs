import { config } from "@remotion/eslint-config-flat";

export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
