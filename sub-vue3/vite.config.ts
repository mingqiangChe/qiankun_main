import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import autoprefixer from "autoprefixer"
import windicss from "vite-plugin-windicss"
// import AutoImport from "unplugin-auto-import/vite"
// import Components from "unplugin-vue-components/vite"
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    windicss(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
        }),
      ],
    },
  },
  server: {
    proxy: {
      '/user': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }
  }
})
