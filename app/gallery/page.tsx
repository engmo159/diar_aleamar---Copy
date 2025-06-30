import { Metadata } from 'next'
import PageHeader from '../components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data/projects'

export const metadata: Metadata = {
  title: 'معرض الأعمال | شركة ديار الإعمار',
  description:
    'تصفح معرض أعمالنا في مجال المقاولات والبناء. اكتشف مشاريعنا السابقة وأعمالنا المميزة.',
  keywords: [
    'معرض الأعمال',
    'مشاريع سابقة',
    'أعمال البناء',
    'شركة ديار الإعمار',
    'مقاولات عامة',
  ],
  alternates: {
    canonical: 'https://diarconstruction.netlify.app/gallery',
  },
  openGraph: {
    title: 'معرض الأعمال | شركة ديار الإعمار',
    description:
      'تصفح معرض أعمالنا في مجال المقاولات والبناء. اكتشف مشاريعنا السابقة وأعمالنا المميزة.',
    url: 'https://diarconstruction.netlify.app/gallery',
    siteName: 'شركة ديار الإعمار',
    type: 'website',
    locale: 'ar_SA',
  },
}

const categories = Array.from(
  new Set(projects.map(project => project.category))
)

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title='معرض الأعمال'
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'معرض الأعمال', path: '/gallery' },
        ]}
      />

      <div className='container mx-auto px-4 py-16'>
        {/* Category Filter */}
        <div className='mb-12'>
          <div className='flex flex-wrap gap-4 justify-center'>
            <button className='px-6 py-2 rounded-full bg-construction-blue text-white hover:bg-construction-blue/90 transition-colors'>
              الكل
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className='px-6 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-construction-blue hover:text-white transition-colors'
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className='group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform hover:scale-[1.02]'
            >
              <div className='relative h-64'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
              <div className='p-6'>
                <span className='inline-block px-3 py-1 text-sm bg-construction-blue/10 text-construction-blue rounded-full mb-3'>
                  {project.category}
                </span>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 line-clamp-2'>
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'معرض الأعمال | شركة ديار الإعمار',
            description:
              'تصفح معرض أعمالنا في مجال المقاولات والبناء. اكتشف مشاريعنا السابقة وأعمالنا المميزة.',
            url: 'https://diarconstruction.netlify.app/gallery',
            publisher: {
              '@type': 'Organization',
              name: 'شركة ديار الإعمار',
              url: 'https://diarconstruction.netlify.app',
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: projects.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Project',
                  name: project.title,
                  description: project.description,
                  image: project.image,
                  url: `https://diarconstruction.netlify.app${project.link}`,
                },
              })),
            },
          }),
        }}
      />
    </>
  )
}
