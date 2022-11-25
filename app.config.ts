export default defineAppConfig({
  docus: {
    title: `Morty's blog`,
    description: `This is Morty's tech blog, record and share a variety of coding information`,
    url: 'http://morty.tw',
    image: '/social-card-preview.png',
    socials: {
      github: 'motea927'
    },
    github: {
      root: 'content',
      edit: true,
      contributors: false
    },
    aside: {
      level: 1,
      exclude: [],
      collapsed: true
    },
    header: {
      title: `Morty's blog`,
      logo: false,
      showLinkIcon: true
    },
    footer: {
      credits: false
    }
  }
})
