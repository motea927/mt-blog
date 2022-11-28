export default defineNuxtPlugin(({ provide }) => {
  const GA_ID = 'G-CVPQ8TCZXX'

  const router = useRouter()
  if (process.env.NODE_ENV !== 'production') {
    provide('gtag', (...args: any[]) => { })
  }

  window.dataLayer = window.dataLayer || []

  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  provide('gtag', gtag)
  gtag('js', new Date())
  gtag('config', GA_ID)

  router.afterEach((to) => {
    gtag('config', GA_ID, { 'page_path': to.fullPath, 'location_path': window.location.origin + to.fullPath })
  })
})
