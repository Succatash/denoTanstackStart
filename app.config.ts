// deno-lint-ignore-file

import { defineConfig } from "@tanstack/react-start/config";
import * as _react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import deno from "@deno/vite-plugin";

export default defineConfig({
  vite: {
    plugins: [deno(), tailwindcss() as any],
  },
  tsr: {
    addExtensions: true,
    autoCodeSplitting: true,
  },
  server: { preset: "deno" },
});
