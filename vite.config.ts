import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

const pwaConfig: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: [
    "favicon.ico",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "apple-touc-icon.png",
    "android-chrome-192x192.png"
  ],
  manifest: {
    name: "Weather App",
    short_name: "Weather",
    description: "Weather forecast app",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
    ],
    theme_color: "#ffffff",
    background_color: "#fff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: ({ request }) => request.destination === "image",
        handler: "CacheFirst",
        options: {
          cacheName: "images-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 30 * 24 * 60 * 60
          }
        }
      }
    ]
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaConfig)
  ],
});
