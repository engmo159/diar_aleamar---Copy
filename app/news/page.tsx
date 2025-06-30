import { Metadata } from 'next'
import PageHeader from '../components/PageHeader'
import { newsArticles } from '../data/news'
import { projects } from '../data/projects'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'الأخبار | شركة ديار الإعمار',
  description:
    'آخر الأخبار والتحديثات عن مشاريع شركة ديار الإعمار في المملكة العربية السعودية. تعرف على أحدث إنجازاتنا وتطورات مشاريعنا.',
  keywords: [
    'أخبار البناء',
    'مشاريع البناء',
    'شركة ديار الإعمار',
    'مقاولات عامة',
    'إنشاءات',
  ],
  alternates: {
    canonical: 'https://diarconstruction.netlify.app/news',
  },
  openGraph: {
    title: 'الأخبار | شركة ديار الإعمار',
    description:
      'آخر الأخبار والتحديثات عن مشاريع شركة ديار الإعمار في المملكة العربية السعودية.',
    url: 'https://diarconstruction.netlify.app/news',
    siteName: 'شركة ديار الإعمار',
    type: 'website',
    locale: 'ar_SA',
  },
}

const NewsPage = () => {
  // Combine news articles with their related projects
  const articlesWithProjects = newsArticles.map(article => ({
    ...article,
    project: projects.find(p => p.link.includes(article.projectId)),
  }))

  return (
    <>
      <PageHeader
        title='أخبار مقاولات وتشطيب منازل في المملكة العربية السعودية'
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'الأخبار', path: '/news' },
        ]}
      />

      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main content - News articles */}
          <div className='lg:col-span-2 space-y-8'>
            {articlesWithProjects.map(article => (
              <article
                key={article.id}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'
              >
                <div className='relative h-64'>
                  <Image
                    src={article.image}
                    alt={`${article.title} - أخبار مقاولات المملكة العربية السعودية - شركة ديار الإعمار`}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw'
                    className='object-cover'
                    loading='lazy'
                    quality={75}
                    placeholder='blur'
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU4Ojo4Oj5FRkZGRkZGRkZGRkZGRkZGRkb/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                      {new Date(article.publicationDate).toLocaleDateString(
                        'ar-SA',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </span>
                    {article.project && (
                      <span className='bg-construction-blue text-white px-3 py-1 rounded-full text-sm'>
                        {article.project.category}
                      </span>
                    )}
                  </div>
                  <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                    {article.title}
                  </h2>
                  <p className='text-gray-600 dark:text-gray-300 mb-6'>
                    {article.content}
                  </p>
                  {article.project && (
                    <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-lg'>
                      <h3 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white'>
                        المشروع المرتبط
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300 mb-2'>
                        {article.project.title}
                      </p>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        تاريخ الإنجاز: {article.project.completionDate}
                      </p>
                      <Link
                        href={article.project.link}
                        className='inline-block mt-3 text-construction-blue hover:text-blue-700 transition-colors'
                      >
                        عرض تفاصيل المشروع →
                      </Link>
                    </div>
                  )}
                </div>
                <script
                  type='application/ld+json'
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Article',
                      headline: article.title,
                      description: article.content,
                      image: article.image,
                      datePublished: article.publicationDate,
                      author: {
                        '@type': 'Organization',
                        name: 'شركة ديار الإعمار',
                      },
                      publisher: {
                        '@type': 'Organization',
                        name: 'شركة ديار الإعمار',
                        logo: {
                          '@type': 'ImageObject',
                          url: 'https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/khn0dbra3ghhotdrqp6t',
                        },
                      },
                    }),
                  }}
                />
              </article>
            ))}
          </div>

          {/* Sidebar - Latest Projects */}
          <div className='lg:col-span-1'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
              <h2 className='text-xl font-bold mb-6 text-gray-900 dark:text-white'>
                أحدث المشاريع
              </h2>
              <div className='space-y-4'>
                {projects.slice(0, 3).map((project, index) => (
                  <Link key={index} href={project.link} className='block group'>
                    <div className='relative h-32 mb-2 rounded-lg overflow-hidden'>
                      <Image
                        src={project.image}
                        alt={`مشروع ${project.title} - ${project.category} في المملكة العربية السعودية - شركة ديار الإعمار`}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                        loading='lazy'
                      />
                    </div>
                    <h3 className='font-semibold text-gray-900 dark:text-white group-hover:text-construction-blue transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      {project.completionDate}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: 'الأخبار | شركة ديار الإعمار',
            description:
              'آخر الأخبار والتحديثات عن مشاريع شركة ديار الإعمار في المملكة العربية السعودية.',
            datePublished: new Date().toISOString(),
            publisher: {
              '@type': 'Organization',
              name: 'شركة ديار الإعمار',
              logo: {
                '@type': 'ImageObject',
                url: 'https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/khn0dbra3ghhotdrqp6t',
              },
            },
          }),
        }}
      />
    </>
  )
}

export default NewsPage
