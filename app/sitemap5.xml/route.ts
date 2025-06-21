import { NextResponse } from 'next/server'

const baseUrl = 'https://diar-construction.vercel.app'

const staticPages = [
  { path: '/', changefreq: 'daily', priority: '1' },
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/gallery', changefreq: 'weekly', priority: '0.9' },
  { path: '/news', changefreq: 'daily', priority: '0.9' },
  { path: '/projects', changefreq: 'weekly', priority: '0.9' },
]

const services = [
  'general-contracting',
  'renovation',
  'civil-engineering',
  'steel-structures',
  'mep-works',
  'site-development',
  'architectural-design',
  'project-management',
  'insulation-works',
  'flooring-painting',
  'carpentry-works',
  'welding-works',
  'aluminum-facades',
  'gypsum-decor',
  'safety-security',
  'web-development',
  'seo-optimization',
  'content-management',
]

const projects = ['new-capital-residential', 'social-insurance-building']

function generateUrl({
  path,
  changefreq,
  priority,
}: {
  path: string
  changefreq: string
  priority: string
}) {
  return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

function generateSiteMap() {
  const staticUrls = staticPages.map(generateUrl).join('')
  const servicesUrls = services
    .map(slug =>
      generateUrl({
        path: `/services/${slug}`,
        changefreq: 'weekly',
        priority: '0.8',
      })
    )
    .join('')
  const projectsUrls = projects
    .map(slug =>
      generateUrl({
        path: `/projects/${slug}`,
        changefreq: 'weekly',
        priority: '0.8',
      })
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls}
    ${servicesUrls}
    ${projectsUrls}
  </urlset>`
}

export async function GET() {
  const sitemap = generateSiteMap()
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
