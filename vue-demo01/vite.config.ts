/*
 * @creater: Hao1747943255 Hao1747943255@gmail.com
 * @since: 2022-11-29 20:50:34
 * @LastAuthor: Hao1747943255 Hao1747943255@gmail.com
 * @lastTime: 2022-12-02 14:54:50
 * @文件相对于项目的路径: \vue3-demo\vue-demo01\vite.config.ts
 * @message: 
 * 行不行啊，细狗
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always", // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          mainColor: "red",
        },
      },
    },
  },

})
