export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  srcDir: "src",
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    // for HMR
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
