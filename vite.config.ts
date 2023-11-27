import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // svgLoader({
    //   svgoConfig: {
    //     plugins: [
    //       {
    //         name: 'preset-default',
    //         params: {
    //           overrides: {
    //             cleanupIDs: false,
    //           },
    //         },
    //       },
    //     ],
    //   },
    // }),
  ],
  base: 'dnd-helper',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5199,
  },
});
