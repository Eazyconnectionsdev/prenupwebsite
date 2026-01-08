import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      // -----------------------------
      // 1. Allow 'any' type
      // -----------------------------
      "@typescript-eslint/no-explicit-any": "off",

      // -----------------------------
      // 2. Disable unused variables/params warnings for functions
      // -----------------------------
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "off", // turn off all unused variable errors
        {
          argsIgnorePattern: "^_", // ignore function parameters starting with _
        },
      ],
    },
  },

  // -----------------------------
  // Ignore build folders and env files
  // -----------------------------
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
