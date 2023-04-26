export default defineAppConfig({
  docus: {
    title: `Morty's blog`,
    description: `This is Morty's tech blog, record and share a variety of coding information`,
    url: 'http://morty.tw',
    image: '/social-card-preview.png',
    socials: {
      github: 'motea927'
    },
    aside: {
      level: 1,
      exclude: [],
      collapsed: false
    },
    header: {
      title: `Morty's blog`,
      logo: false,
      showLinkIcon: true
    },
    footer: {
      credits: false,
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    }
  }
})
