import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  
  // ✅ Ignore generated & external folders
  {
    ignores: [
      "node_modules",
      "dist",
      "Backend/dist",
      "build",
      ".vite",
      "coverage"
    ]
  },

  // ✅ JavaScript rules (browser)
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    }
  },

  // ✅ React rules
  pluginReact.configs.flat.recommended,

  // ✅ React fixes for modern setups
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off"   // 🔥 YOU ARE NOT USING PROP TYPES
    }
  }
]);
