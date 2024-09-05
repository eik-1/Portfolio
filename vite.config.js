import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslint from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    server: {
        port: 5173, // Ensure this matches the port in the error message
    },
})
