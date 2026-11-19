import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on every interface and on the port of the frontend Service
    host: true,
    port: 80,
    strictPort: true,
    // Accept the host of the Okteto endpoint
    allowedHosts: true,
  },
});
