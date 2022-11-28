import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://morty.tw'
  })
  for (const doc of docs) {
    if (!doc._file?.includes('_dir.yml')) {
      sitemap.write({
        url: doc._path,
        changefreq: 'weekly'
      })
    }
    
  }
  sitemap.end()
  return streamToPromise(sitemap)
})
