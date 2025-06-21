import { Metadata } from 'next'

interface GenerateMetadataProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  path: string
  type?: 'website' | 'article'
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = 'https://diar-construction.vercel.app/og-image.jpg',
  path,
  type = 'website',
}: GenerateMetadataProps): Metadata {
  const baseUrl = 'https://diar-construction.vercel.app'
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      url,
      siteName: 'Diar Aleamar',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  }
}

// Structured data generators
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateWebPageStructuredData({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    datePublished,
    dateModified,
  }
}
