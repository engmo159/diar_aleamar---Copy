import Hero from './components/Hero'
import SectionHeader from './components/SectionHeader'
import ServiceCard from './components/ServiceCard'
import TestimonialCard from './components/TestimonialCard'
import StatCard from './components/StatCard'
import CallToAction from './components/CallToAction'
import type { Metadata } from 'next'
import { Building2, Hammer, Construction, Home as HomeIcon } from 'lucide-react'
import Head from 'next/head'
import { projects } from './data/projects'
import Link from 'next/link'
import Image from 'next/image'
export const metadata: Metadata = {
  title:
    'شركة ديار الإعمار العالمية للمقاولات العامة في المملكة العربية السعودية | خدمات البناء والمشاريع الإنشائية',
  description:
    'شركة ديار الإعمار العالمية للمقاولات العامة في المملكة العربية السعودية تقدم خدمات متكاملة في البناء والمقاولات العامة، تنفيذ المشاريع السكنية والتجارية والصناعية بجودة عالية وخبرة طويلة. شركة سعودية تلتزم بأعلى معايير الجودة والاحترافية.',
  openGraph: {
    title:
      'شركة ديار الإعمار العالمية للمقاولات العامة في المملكة العربية السعودية',
    description:
      'شركة مقاولات سعودية متخصصة في خدمات البناء والمقاولات العامة وتنفيذ المشاريع بأعلى جودة في المملكة العربية السعودية.',
    locale: 'ar_SA',
    type: 'website',
    images:
      'https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/khn0dbra3ghhotdrqp6t',
    siteName: 'شركة ديار الإعمار',
    url: 'https://diar-aleamar.vercel.app/',
  },
  alternates: {
    canonical: `https://diar-aleamar.vercel.app/`,
  },
}

const Home = () => {
  return (
    <main>
      <Head>
        {/* إضافة JSON-LD هنا */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'شركة ديار الإعمار',
              url: 'https://diar-aleamar.vercel.app/',
              logo: 'https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/khn0dbra3ghhotdrqp6t',
              sameAs: [
                'https://twitter.com/diar_aleamar',
                'https://www.linkedin.com/company/diar-aleamar',
              ],
            }),
          }}
        />
      </Head>
      {/* Hero Section */}
      <Hero
        slides={[
          {
            image:
              'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'مرحبا',
            subtitle: 'نبني الأحلام',
          },
          {
            image:
              'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'خبرتنا',
            subtitle: 'مشاريع بجودة عالية',
          },
          {
            image:
              'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'اتصل بنا',
            subtitle: 'نحن هنا من أجلك',
          },
        ]}
        ctaText={'احصل على عرض'}
        ctaLink='/contact'
      />

      {/* Services Section */}
      <section className='py-20 bg-gray-50 dark:bg-gray-900'>
        <div className='container mx-auto px-4'>
          <SectionHeader
            title={'خدماتنا'}
            subtitle='نقدم مجموعة شاملة من خدمات البناء لتلبية جميع احتياجاتك'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <ServiceCard
              title='البناء التجاري'
              description='خدمات بناء عالية الجودة للمكاتب والمساحات التجارية والمرافق الصناعية.'
              icon={<Building2 className='h-6 w-6' />}
              backgroundImage='https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <ServiceCard
              title='البناء السكني'
              description='بناء منازل مخصصة، تجديدات، وتطوير مساكن متعددة العائلات.'
              icon={<HomeIcon className='h-6 w-6' />}
              // backgroundImage='https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <ServiceCard
              title='التجديد وإعادة التصميم'
              description='تحويل المباني القائمة من خلال خدمات التجديد وإعادة التصميم المتخصصة.'
              icon={<Hammer className='h-6 w-6' />}
              // backgroundImage='https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <ServiceCard
              title='خدمات تقنية المعلومات'
              description=' نقدم خدمات رقمية متكاملة تشمل تصميم المواقع، تحسين محركات البحث، والتسويق الرقمي لدعم حضورك الرقمي..'
              icon={<Construction className='h-6 w-6' />}
              // backgroundImage='https://images.unsplash.com/photo-1519043916581-33ecfdba3b1c?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className='py-20 bg-white dark:bg-gray-800'>
        <div className='container mx-auto px-4'>
          <SectionHeader
            title='أحدث مشاريعنا'
            subtitle='تعرف على أحدث المشاريع التي قمنا بتنفيذها'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'
              >
                <div className='relative h-48'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500} // Adjust the width as needed
                    height={300} // Adjust the height as needed
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-4 right-4 bg-construction-blue text-white px-3 py-1 rounded-full text-sm'>
                    {project.category}
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className='inline-block bg-construction-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300'
                  >
                    اقرأ المزيد
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link
              href='/projects'
              className='inline-block bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-300'
            >
              عرض جميع المشاريع
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-construction-blue text-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <StatCard value='50+' label='مشاريع مكتملة' />
            <StatCard value='25+' label='سنوات الخبرة' />
            <StatCard value='100+' label='فريق محترف' />
            <StatCard value='8+' label='شركاء موثوقون' />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-gray-50 dark:bg-gray-900'>
        <div className='container mx-auto px-4'>
          <SectionHeader title='ماذا يقول عملاؤنا' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <TestimonialCard
              quote='اهتمامهم بالتفاصيل والتزامهم بجودة البناء لا مثيل له. تم الانتهاء من المشروع في الوقت المحدد وفاق توقعاتنا.'
              author='ياسين حسن'
              position='الرئيس التنفيذي، الخليج للعقارات'
              image='https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/ncexsjzxbgmeruhel5ry'
            />
            <TestimonialCard
              quote='كان العمل مع فريق ديار الإعمار هذا متعة. لقد فهموا رؤيتنا وقدموا مبنى مكتبًا جميلًا يحبه موظفونا.'
              author='أحمد علي'
              position='مدير، شركة تيك هاب'
              image='https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/xhktpdurjxe3wz2bz72b'
            />
            <TestimonialCard
              quote='لقد حولوا التصميم إلى واقع رائع، وأثبتوا أنهم أهل للثقة في المشاريع الكبيرة.'
              author='محمد الفارسي'
              position='مدير المشروع، تطوير المدينة'
              image='https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/wu9iswe0fihl0gwc3xj0'
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title='هل أنت مستعد لبدء مشروع البناء الخاص بك؟'
        description='اتصل بنا اليوم للحصول على استشارة وعرض سعر مجاني. دعنا نحول رؤيتك إلى حقيقة!'
        buttonText='اتصل بنا الآن'
        buttonLink='/contact'
      />
    </main>
  )
}

export default Home
