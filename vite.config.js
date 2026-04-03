import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 开发环境（npm run dev）base设为 /，生产环境（npm run build）设为 /zhuo.ys-blog/
  const isProduction = mode === 'production'
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    // 关键：分环境配置base
    base: isProduction ? '/zhuo.ys-blog/' : '/',
    build: {
      assetsDir: 'assets'
    }
  }
})