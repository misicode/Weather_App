import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

const pwaConfig: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: [
    "favicon.ico",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "apple-touc-icon.png",
    "android-chrome-192x192.png",
    "android-chrome-512x512.png"
  ],
  manifest: {
    name: "Weather App",
    short_name: "Weather",
    description: "Weather forecast app",
    icons: [
      {
        src: "/favicon.icon",
        sizes: "48x48",
        type: "image/x-icon",
        purpose: "favicon",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#fff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaConfig)
  ],
});
