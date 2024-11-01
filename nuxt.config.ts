// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Nuxt 3 Tree Test',
      meta: [
        {
          'http-equiv': 'x-ua-compatible',
          content: 'IE=edge',
        },
        {
          name: 'format-detection',
          content: 'telephone=no, address=no, email=no, date=no, url=no',
        },
        {
          name: 'theme-color',
          content: '#1C2734',
        },
        {
          name: 'author',
          content: 'a.nikonorov',
        },
        {
          name: 'description',
          content: 'Тестовое задание для ООО Арт аксессориз',
        },
        {
          name: 'keywords',
          content: 'ООО Арт аксессориз, тестовое задание, nuxt',
        },
      ],
    },
  },
  css: ['@/assets/css/tailwind.css'],
  buildModules: ['@nuxt/typescript-build'],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    },
  },
});
