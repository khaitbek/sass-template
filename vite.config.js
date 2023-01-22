import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@scss': path.resolve(__dirname, './scss/*'),
            '@components': path.resolve(__dirname, "./scss", "components"),
            '@abstracts': path.resolve(__dirname, "./scss", "abstracts"),
            '@base': path.resolve(__dirname, "./scss", "base"),
            '@layout': path.resolve(__dirname, "./scss", "layout"),
            '@pages': path.resolve(__dirname, "./scss", "pages"),
            '@vendors': path.resolve(__dirname, "./scss", "vendors"),
            '@js': path.resolve(__dirname, "./js"),
        }
    }
})