export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      meta: [
        {
          name: 'google-site-verification',
          content: 'NAQE3tDhYjIQ5oL3Ihx5dg4VvxTJngXKLrbNxBAN5c0'
        }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-CVPQ8TCZXX',
          async: true
        }
      ]
    }
  }
})
