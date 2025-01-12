import gleam from "vite-gleam";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        target: "esnext"
    },
    plugins: [wasm(), topLevelAwait(), gleam()],
})
