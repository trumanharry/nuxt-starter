// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
     ],
    // Add this server object
    server: {
      allowedHosts: [
        'devserver-main--testmedkey.netlify.app',
        'devserver-preview--testmedkey.netlify.app' // Add this line
      ]
    }
  },
  experimental: { appManifest: false },
  modules: ["nuxt-icon", "@nuxt/image"],
  compatibilityDate: "2024-12-18",
});
