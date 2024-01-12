import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 开发服务器端口号
    open: true // 启动开发服务器时自动在浏览器中打开页面
  }
})