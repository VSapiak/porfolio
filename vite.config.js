import { defineConfig } from "vite";
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import image from '@rollup/plugin-image';

export default defineConfig({
    base: '/porfolio/',

    root: 'src',
    build: {
        rollupOptions: {
            input: glob.sync('./src/*.html'),
        },
        outDir: '../dist',
    },
    input: 'src/index.js',
        output: {
            dir: 'output',
            format: 'cjs'
    },

    plugins: [injectHTML(), FullReload(['./src/**/**.html']), image()],
});
