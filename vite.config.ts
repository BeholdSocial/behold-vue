import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/index.vue",
      name: "BeholdWidget",
      fileName: (format, entryName) => {
        const extension = format === "es" ? "js" : "cjs"
        return `${entryName}.${extension}`
      },
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ["preact", "preact/jsx-runtime", "preact/hooks"],
      output: {
        globals: {
          preact: "Preact",
          "preact/jsx-runtime": "jsxRuntime",
          "preact/hooks": "hooks",
        },
      },
    },
  },
})
