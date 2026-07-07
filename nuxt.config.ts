// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: ['~/assets/css/animations.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  generate: {
    routes: [
      '/', '/game',
      '/giati-i-gata-kai-o-skulos-einai-ehthroi',
      '/h-kamilopardali-kai-oi-pithikoi',
      '/i-alepou-kai-o-korudallos',
      '/i-istoria-tou-keraunou-kai-tis-vrontis',
      '/i-koukouvagia-kai-i-perdika',
      '/i-mahi-ton-kavourion',
      '/liontari-lukos-kai-alepou',
      '/o-fantasmenos-kokoras',
      '/o-gaidaros-kai-i-lura',
      '/o-ilios-to-feggari-ki-o-aeras-vgainoun-gia-deipno',
      '/o-lagos-pou-fovotan',
      '/o-laimargos-pontikos',
      '/o-lukos-i-alepou-ki-o-gaidaros',
      '/o-mulonas-kai-o-gatos-tou',
      '/o-pithikos-pou-egine-vasilias',
      '/o-vatrahos-kai-i-alepou',
      '/pos-i-ma-mou-vrike-fagito-otan-peinouse',
      '/to-ashimopapo',
      '/to-asimenio-koudounaki',
      '/to-kolpo-tou-gatou',
      '/to-pathima-tou-lukou',
      '/to-pio-gluko-psomi',
      '/to-xriso-psaraki'
    ]
  },
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
