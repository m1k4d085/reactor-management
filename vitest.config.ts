/// <reference types="vitest" />

import { mergeConfig, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
    },
  })
);
