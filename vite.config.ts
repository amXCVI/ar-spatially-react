import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr({
            svgrOptions: {
                // svgr options
            },
        }),
        react(),
    ],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "src") },
            { find: "@ar-kit", replacement: path.resolve(__dirname, "ar-spatially-kit") },
        ],
    },
});
