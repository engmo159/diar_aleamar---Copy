import { Metadata } from 'next'
import PageHeader from '../components/PageHeader'
import services from '../data/services'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'خدماتنا | شركة ديار الإعمار',
  description:
    'نقدم مجموعة شاملة من خدمات المقاولات العامة والبناء في المملكة العربية السعودية. تعرف على خدماتنا في البناء السكني، التجاري، والصناعي.',
  keywords: [
    'خدمات مقاولات',
    'بناء سكني',
    'بناء تجاري',
    'مقاولات عامة',
    'شركة ديار الإعمار',
  ],
  alternates: {
    canonical: 'https://diar-construction.vercel.app/services',
  },
  openGraph: {
    title: 'خدماتنا | شركة ديار الإعمار',
    description:
      'نقدم مجموعة شاملة من خدمات المقاولات العامة والبناء في المملكة العربية السعودية.',
    url: 'https://diar-construction.vercel.app/services',
    siteName: 'شركة ديار الإعمار',
    type: 'website',
    locale: 'ar_SA',
  },
}

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title='خدماتنا'
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'خدماتنا', path: '/services' },
        ]}
      />

      <div className='container mx-auto px-4 py-16'>
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className='group'
            >
              <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
                <div className='p-6'>
                  <div className='flex items-center mb-4'>
                    <div className='bg-construction-blue/10 p-3 rounded-lg mr-4'>
                      {service.icon}
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-construction-blue transition-colors'>
                      {service.title}
                    </h3>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    {service.description}
                  </p>
                  <div className='flex items-center text-construction-blue group-hover:translate-x-2 transition-transform'>
                    <span>اقرأ المزيد</span>
                    <svg
                      className='w-4 h-4 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-16 bg-construction-blue text-white rounded-lg p-8 text-center'>
          <h2 className='text-2xl font-bold mb-4'>
            هل تحتاج إلى استشارة في مشروعك؟
          </h2>
          <p className='mb-6'>
            تواصل معنا الآن للحصول على استشارة مجانية وتقييم لمشروعك
          </p>
          <Link
            href='/contact'
            className='inline-block bg-white text-construction-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors'
          >
            تواصل معنا
          </Link>
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: services.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
                url: `https://diar-construction.vercel.app/services/${service.slug}`,
              },
            })),
          }),
        }}
      />
    </>
  )
}

export default ServicesPage
