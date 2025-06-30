// app/services/[slug]/page.tsx
import { Metadata } from 'next'
import PageHeader from '../../components/PageHeader'
import services, { Service } from '../../data/services'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s: Service) => s.slug === slug)

  if (!service) {
    return {
      title: 'خدمة غير موجودة | شركة ديار الإعمار',
    }
  }

  return {
    title: `${service.title} | شركة ديار الإعمار`,
    description: service.description,
    keywords: [
      service.title,
      'مقاولات عامة',
      'شركة ديار الإعمار',
      'خدمات بناء',
      service.field === 'engineering' ? 'مقاولات' : 'خدمات رقمية',
    ],
    alternates: {
      canonical: `https://diarconstruction.netlify.app/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | شركة ديار الإعمار`,
      description: service.description,
      url: `https://diarconstruction.netlify.app/services/${slug}`,
      siteName: 'شركة ديار الإعمار',
      type: 'website',
      locale: 'ar_SA',
    },
  }
}

export async function generateStaticParams() {
  return services.map((service: Service) => ({
    slug: service.slug,
  }))
}

const ServicePage = async ({ params }: Props) => {
  const { slug } = await params
  const service = services.find((s: Service) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'خدماتنا', path: '/services' },
          { label: service.title, path: `/services/${service.slug}` },
        ]}
      />

      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
              <div className='relative h-[400px]'>
                <Image
                  src={`https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt={service.title}
                  fill
                  className='object-cover'
                  loading='lazy'
                />
              </div>
              <div className='p-8'>
                <div className='flex items-center mb-6'>
                  <div className='bg-construction-blue/10 p-4 rounded-lg mr-4'>
                    {service.icon}
                  </div>
                  <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
                    {service.title}
                  </h1>
                </div>
                <div className='prose dark:prose-invert max-w-none'>
                  <p className='text-gray-600 dark:text-gray-300 mb-6'>
                    {service.description}
                  </p>
                  <div className='text-gray-600 dark:text-gray-300'>
                    {service.content}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            {/* Related Services */}
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8'>
              <h2 className='text-xl font-bold mb-6 text-gray-900 dark:text-white'>
                خدمات ذات صلة
              </h2>
              <div className='space-y-4'>
                {services
                  .filter(
                    (s: Service) =>
                      s.field === service.field && s.slug !== service.slug
                  )
                  .slice(0, 3)
                  .map((relatedService: Service, index: number) => (
                    <Link
                      key={index}
                      href={`/services/${relatedService.slug}`}
                      className='block group'
                    >
                      <div className='flex items-center'>
                        <div className='bg-construction-blue/10 p-2 rounded-lg mr-4'>
                          {relatedService.icon}
                        </div>
                        <div>
                          <h3 className='font-semibold text-gray-900 dark:text-white group-hover:text-construction-blue transition-colors'>
                            {relatedService.title}
                          </h3>
                          <p className='text-sm text-gray-500 dark:text-gray-400'>
                            {relatedService.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className='bg-construction-blue text-white rounded-lg p-6'>
              <h2 className='text-xl font-bold mb-4'>هل تحتاج إلى استشارة؟</h2>
              <p className='mb-6'>
                تواصل معنا الآن للحصول على استشارة مجانية وتقييم لمشروعك
              </p>
              <Link
                href='/contact'
                className='inline-block bg-white text-construction-blue px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors'
              >
                تواصل معنا
              </Link>
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
            '@type': 'Service',
            name: service.title,
            description: service.description,
            provider: {
              '@type': 'Organization',
              name: 'شركة ديار الإعمار',
              url: 'https://diarconstruction.netlify.app',
            },
            areaServed: {
              '@type': 'Place',
              name: 'المملكة العربية السعودية',
            },
            mainEntityOfPage: `https://diarconstruction.netlify.app/services/${service.slug}`,
          }),
        }}
      />
    </>
  )
}

export default ServicePage
