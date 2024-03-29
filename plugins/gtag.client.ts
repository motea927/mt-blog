export default defineNuxtPlugin(({ provide }) => {
  const GA_ID = 'G-CVPQ8TCZXX'

  const router = useRouter()
  if (process.env.NODE_ENV !== 'production') {
    provide('gtag', (...args: any[]) => {})
    return
  }

  window.dataLayer = window.dataLayer || []

  function gtag(...any: any[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }

  provide('gtag', gtag)

  gtag('js', new Date())
  gtag('config', GA_ID)

  router.afterEach(to => {
    gtag('config', GA_ID, {
      page_path: to.fullPath,
      location_path: window.location.origin + to.fullPath
    })
  })
})
