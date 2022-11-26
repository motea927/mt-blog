const gaId = 'CVPQ8TCZXX'

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  app: {
    head: {
      script: [
        {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`
        },
        {
          children: `
            window.dataLayer = window.dataLayer || []
            function gtag() {
              dataLayer.push(arguments)
            }
            gtag('js', new Date())

            gtag('config', '${gaId}')
          `
        }
      ]
    }
  }
})
