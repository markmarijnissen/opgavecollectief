// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Inter:wght@100..900&display=swap' },
      ],
    }
  },
  ssr: true,
  css: [
    '~/assets/style.css'
  ],
  content: {
    markdown: {
      anchorLinks: false,
    }
  },
})
