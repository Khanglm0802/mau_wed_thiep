import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8888, // Đổi sang cổng 8888 riêng biệt, không trùng với chi_mai
    host: true, // Cho phép xem cả trên localhost và điện thoại cùng mạng wifi
    open: true, // Tự động mở trình duyệt khi chạy npm run dev
  },
  preview: {
    port: 8889,
  }
})
