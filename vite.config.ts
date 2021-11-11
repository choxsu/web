import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需加载包
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// vuejsx支持
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from 'path'
// 别名支持
const resolve = dir => path.resolve(__dirname, dir)


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("./src")
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://choxsu.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: resolve("./dist"), // 打包输出目录， 默认dist
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [NaiveUiResolver()],
    })
  ]
})
