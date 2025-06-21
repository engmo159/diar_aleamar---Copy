import { Cairo } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'
import { Metadata } from 'next'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { cookies } from 'next/headers'

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic'],
  weight: ['400', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'شركة ديار الإعمار العالمية للمقاولات العامة في المملكة العربية السعودية المدينة المنورة | خدمات البناء والمشاريع الإنشائية',
  description:
    'شركة ديار الإعمار العالمية للمقاولات العامة في المملكة العربية السعودية المدينة المنورة تقدم خدمات متكاملة في البناء والمقاولات العامة، تنفيذ المشاريع السكنية والتجارية والصناعية بجودة عالية وخبرة طويلة. شركة سعودية تلتزم بأعلى معايير الجودة والاحترافية.',
  openGraph: {
    title:
      'شركة ديار الإعمار العالمية للمقاولات العامة في المملكة العربية السعودية المدينة المنورة',
    description:
      'شركة مقاولات تعمل بالمملكة العربية السعودية المدينة المنورة متخصصة في خدمات البناء والمقاولات العامة وتنفيذ المشاريع بأعلى جودة في المملكة العربية السعودية المدينة المنورة.',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/khn0dbra3ghhotdrqp6t',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://diar-construction.vercel.app/',
  },
}

async function getTheme() {
  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('theme')
  return themeCookie?.value || 'light'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = await getTheme()

  return (
    <html
      lang='ar'
      dir='rtl'
      suppressHydrationWarning
      className={theme === 'dark' ? 'dark' : ''}
      style={{
        colorScheme: theme,
      }}
    >
      <Head>
        <link rel='icon' href='/favicon.ico' sizes='16x16' />
        <link rel='icon' href='/favicon-32x32.ico' sizes='32x32' />
        <link rel='icon' href='/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' href='/favicon-48.ico' sizes='48*48' />
        <link
          rel='apple-touch-icon'
          href='/apple-touch-icon.png'
          sizes='180x180'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-192x192.png'
          sizes='192x192'
        />
        <link
          rel='icon'
          type='image/png'
          href='/android-chrome-512x512.png'
          sizes='512x512'
        />
        <meta
          name='theme-color'
          content={theme === 'dark' ? '#000000' : '#ffffff'}
        />
      </Head>

      <body className={`${cairo.variable} font-cairo`} suppressHydrationWarning>
        <ClientLayout>
          {children}
          <Analytics />
        </ClientLayout>
      </body>
    </html>
  )
}
