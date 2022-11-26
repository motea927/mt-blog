import VueGtag from 'vue-gtag'

export default defineNuxtPlugin(nuxtApp => {
  const router = useRouter()

  nuxtApp.vueApp.use(
    VueGtag,
    {
      pageTrackerScreenviewEnabled: true,
      config: { id: 'G-CVPQ8TCZXX' }
    },
    router
  )
})
