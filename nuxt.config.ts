// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Huella Global Corporation – Materias Primas para Etiquetas y Empaques',
      meta: [
        {
          name: 'description',
          content:
            'Somos su socio confiable en el abastecimiento de materias primas para etiquetas y empaques innovadores. Más de 15 años en la industria flexográfica.',
        },
        { name: 'theme-color', content: '#071B2F' },
        { property: 'og:title', content: 'Huella Global Corporation' },
        {
          property: 'og:description',
          content:
            'Materias primas de alta calidad para la industria flexográfica. Colombia y Miami.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_CO' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/Huella-Global-Webh.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },

  image: {
    quality: 85,
    formats: ['webp', 'png'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    exposeConfig: false,
  },

  ssr: true,
})
