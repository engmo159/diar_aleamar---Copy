import * as fs from 'fs'
import * as path from 'path'

const getPaths = () => {
  // قائمة الصفحات المتاحة على الموقع
  return [
    { url: '/', lastModified: new Date() },
    { url: '/about', lastModified: new Date() },
    { url: '/services', lastModified: new Date() },
    // إضافة صفحات أخرى هنا
  ]
}

const generateSitemap = () => {
  const paths = getPaths()
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${paths
    .map(
      page => `
    <url>
      <loc>https://yourdomain.com${page.url}</loc>
      <lastmod>${page.lastModified.toISOString()}</lastmod>
    </url>`
    )
    .join('\n')}
  </urlset>`

  // حفظ ملف sitemap.xml في public
  fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemapXml)
}

generateSitemap()
