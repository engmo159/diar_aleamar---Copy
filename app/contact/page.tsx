import { Metadata } from 'next'
import PageHeader from '../components/PageHeader'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'اتصل بنا | شركة ديار الإعمار',
  description:
    'تواصل معنا للحصول على استشارة مجانية أو لمعرفة المزيد عن خدمات البناء والمقاولات العامة.',
  keywords: ['اتصل بنا', 'شركة ديار الإعمار', 'مقاولات عامة', 'استشارة مجانية'],
  alternates: {
    canonical: 'https://diar-construction.vercel.app/contact',
  },
  openGraph: {
    title: 'اتصل بنا | شركة ديار الإعمار',
    description:
      'تواصل معنا للحصول على استشارة مجانية أو لمعرفة المزيد عن خدمات البناء والمقاولات العامة.',
    url: 'https://diar-construction.vercel.app/contact',
    siteName: 'شركة ديار الإعمار',
    type: 'website',
    locale: 'ar_SA',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title='اتصل بنا'
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'اتصل بنا', path: '/contact' },
        ]}
      />

      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
              معلومات الاتصال
            </h2>
            <div className='space-y-6'>
              <div className='flex items-start'>
                <MapPin className='w-6 h-6 text-construction-blue mt-1 ml-4' />
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                    العنوان
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    المملكة العربية السعودية
                    <br />
                    المدينة المنورة , شارع الجامعة
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <Phone className='w-6 h-6 text-construction-blue mt-1 ml-4' />
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                    Phone
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    <Link
                      href='tel:+966564853913'
                      className='hover:text-construction-yellow transition-colors'
                    >
                      564853913 966+
                    </Link>
                  </p>
                  <p className='text-gray-600 dark:text-gray-300'>
                    <Link
                      href='tel:+966543401165'
                      className='hover:text-construction-yellow transition-colors'
                    >
                      543401165 966+
                    </Link>
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <Mail className='w-6 h-6 text-construction-blue mt-1 ml-4' />
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                    Email
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    <Link
                      href='mailto:tarekzanoon2090@gmail.com'
                      className='hover:text-construction-yellow transition-colors'
                    >
                      tarekzanoon2090@gmail.com
                    </Link>
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <Clock className='w-6 h-6 text-construction-blue mt-1 ml-4' />
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                    Working Hours
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Saturday - Thursday: 9:00 AM - 5:00 PM
                    <br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Us | Diar Al-Emaar Construction Company',
            description:
              'Contact us for a free consultation or to learn more about our construction and contracting services.',
            url: 'https://diar-construction.vercel.app/contact',
            publisher: {
              '@type': 'Organization',
              name: 'Diar Al-Emaar Construction Company',
              url: 'https://diar-construction.vercel.app',
            },
            mainEntity: {
              '@type': 'Organization',
              name: 'Diar Al-Emaar Construction Company',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'SA',
                addressLocality: 'Madinah',
                addressRegion: 'Madinah',
                streetAddress: 'University Street',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+966564853913',
                email: 'diaraleamar@gmail.com',
                contactType: 'customer service',
                availableLanguage: ['Arabic', 'English'],
              },
            },
          }),
        }}
      />
    </>
  )
}
