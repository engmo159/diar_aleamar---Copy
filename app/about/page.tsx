import { Metadata } from 'next'
import PageHeader from '../components/PageHeader'
import Image from 'next/image'
import { Building2, Target, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'من نحن | شركة ديار الإعمار',
  description:
    'تعرف على شركة ديار الإعمار العالمية للمقاولات العامة بالمدينة المنورة  - رؤيتنا، رسالتنا، وقيمنا. نحن نقدم خدمات بناء ومقاولات عالية الجودة في المملكة العربية السعودية.',
  keywords: [
    'شركة ديار الإعمار',
    'مقاولات عامة',
    'شركة بناء',
    'مقاولات سعودية',
    'شركة ديار الإعمار',
    'شركة ديار الإعمار العالمية',
    'شركة ديار الإعمار المدينة المنورة',
    'شركة إنشاءات',
  ],
  alternates: {
    canonical: 'https://diarconstruction.netlify.app/about',
  },
  openGraph: {
    title: 'من نحن | شركة ديار الإعمار',
    description:
      'تعرف على شركة ديار الإعمار العالمية للمقاولات العامة - رؤيتنا، رسالتنا، وقيمنا.',
    url: 'https://diarconstruction.netlify.app/about',
    siteName: 'شركة ديار الإعمار',
    type: 'website',
    locale: 'ar_SA',
  },
}

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title='من نحن'
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'من نحن', path: '/about' },
        ]}
      />

      <div className='container mx-auto px-4 py-16'>
        {/* Company Overview */}
        <section className='mb-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='relative h-[400px] rounded-lg overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='شركة ديار الإعمار - مقر الشركة'
                fill
                className='object-cover'
              />
            </div>
            <div>
              <h2 className='text-3xl font-bold mb-6 text-gray-900 dark:text-white'>
                شركة ديار الإعمار العالمية للمقاولات
              </h2>
              <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
                نحن شركة مصرية رائدة في مجال المقاولات العامة والبناء نعمل في
                المملكة العربية السعودية. تأسست شركتنا على مبادئ الجودة والتميز
                والابتكار، ونحن نقدم خدمات متكاملة في مجال البناء والتشييد
                للمشاريع السكنية والتجارية والصناعية.
              </p>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                مع أكثر من 25 عاماً من الخبرة في السوق، تمكنا من بناء سمعة قوية
                في مجال المقاولات العامة، حيث نفذنا العديد من المشاريع الكبرى
                التي ساهمت في مجال التطوير العقارى.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className='mb-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg'>
              <div className='flex items-center mb-4'>
                <Target className='h-8 w-8 text-construction-blue mr-4' />
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  رؤيتنا
                </h3>
              </div>
              <p className='text-gray-600 dark:text-gray-300'>
                نسعى لأن نكون الشركة الرائدة في مجال المقاولات العامة في المملكة
                العربية السعودية، من خلال تقديم خدمات متميزة تلبي تطلعات عملائنا
                وتساهم في تطوير المجتمع.
              </p>
            </div>
            <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg'>
              <div className='flex items-center mb-4'>
                <Building2 className='h-8 w-8 text-construction-blue mr-4' />
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  رسالتنا
                </h3>
              </div>
              <p className='text-gray-600 dark:text-gray-300'>
                تقديم خدمات مقاولات عامة عالية الجودة، مع التركيز على الابتكار
                والاستدامة، وتلبية احتياجات عملائنا بأعلى معايير الجودة
                والسلامة.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white'>
            قيمنا
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center'>
              <div className='bg-construction-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <Award className='h-8 w-8 text-construction-blue' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
                الجودة
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                نلتزم بأعلى معايير الجودة في جميع مشاريعنا وخدماتنا.
              </p>
            </div>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center'>
              <div className='bg-construction-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <Users className='h-8 w-8 text-construction-blue' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
                العمل الجماعي
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                نؤمن بقوة العمل الجماعي والتعاون لتحقيق أفضل النتائج.
              </p>
            </div>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center'>
              <div className='bg-construction-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <Building2 className='h-8 w-8 text-construction-blue' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
                الابتكار
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                نسعى دائماً لتطوير خدماتنا وتبني أحدث التقنيات والابتكارات.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className='bg-construction-blue text-white py-16 rounded-lg'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-bold mb-2'>25+</div>
              <div className='text-lg'>سنوات الخبرة</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>500+</div>
              <div className='text-lg'>مشروع مكتمل</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>100+</div>
              <div className='text-lg'>موظف محترف</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>50+</div>
              <div className='text-lg'>عميل سعيد</div>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'شركة ديار الإعمار العالمية للمقاولات',
            description:
              'شركة رائدة في مجال المقاولات العامة والبناء في المملكة العربية السعودية',
            url: 'https://diarconstruction.netlify.app/about',
            logo: 'https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/khn0dbra3ghhotdrqp6t',
            foundingDate: '1999',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'SA',
            },
            sameAs: [
              'https://twitter.com/diar_aleamar',
              'https://www.linkedin.com/company/diar-aleamar',
            ],
          }),
        }}
      />
    </>
  )
}

export default AboutPage
