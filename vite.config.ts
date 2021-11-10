import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需加载包
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
