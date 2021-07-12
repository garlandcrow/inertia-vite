import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const { resolve } = require("path");

export default defineConfig({
    plugins: [svelte()],
    root: "resources",
    base: `/dist/`,
    resolve: {
        // Set the '@' alias so Vite can find the Breeze component imports.
        alias: {
            "@": "/js",
        },
        // Need to add the ".vue" extension. This is not recommended by Vite
        // (https://vitejs.dev/config/#resolve-extensions) but necessary until
        // the Breeze component imports are updated with .vue.
        extensions: [".svelte", ".js", ".json", ".jsx", ".ts", ".tsx"],
    },
    build: {
        sourcemap: true,
        outDir: resolve(__dirname, "public/dist"),
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: "./resources/js/app.js",
        },
    },
    optimizeDeps: {
        include: [
            "svelte",
            "@inertiajs/inertia",
            "@inertiajs/inertia-svelte",
            "@inertiajs/progress",
            "axios",
        ],
    },
});
