import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

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
        Sitemap({
            hostname: "https://arspatially.com/",
            dynamicRoutes: ["", "product", "ar-nft", "event", "map", "user"],
            generateRobotsTxt: true,
        }),
    ],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "src") },
            { find: "@ar-kit", replacement: path.resolve(__dirname, "ar-spatially-kit") },
        ],
    },
    build: {
        chunkSizeWarningLimit: 250, // Максимальный размер чанка в байтах (например, 250 КБ)
    },
});
