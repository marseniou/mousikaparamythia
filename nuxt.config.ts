// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/animations.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: [400, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
  vite: {
    optimizeDeps: {
      include: ['date-fns-tz'],
    },
  },
  app: {
    head: {
      title: 'Μουσικά Παραμύθια',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Απ\' όλο τον κόσμο, λαϊκά παραμύθια με μουσική και αφήγηση από τον Μάριο Αρσενίου.' },
        { property: 'og:site_name', content: 'Μουσικά Παραμύθια' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
