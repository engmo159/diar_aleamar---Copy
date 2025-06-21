import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { projects } from '../../data/projects'
import PageHeader from '../../components/PageHeader'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.link === `/projects/${slug}`)

  if (!project) {
    return {
      title: 'Project Not Found | Diar Aleamar',
      description: 'The requested project could not be found.',
    }
  }

  return {
    title: `${project.title} | Diar Aleamar`,
    description: project.description,
    keywords: [
      project.category,
      'construction',
      'projects',
      'Diar Aleamar',
      project.location || '',
    ],
    alternates: {
      canonical: `https://diar-construction.vercel.app/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Diar Aleamar`,
      description: project.description,
      url: `https://diar-construction.vercel.app/projects/${slug}`,
      siteName: 'Diar Aleamar',
      type: 'article',
      locale: 'ar_SA',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find(p => p.link === `/projects/${slug}`)

  if (!project) {
    notFound()
  }

  return (
    <>
      <PageHeader
        title={project.title}
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'المشاريع', path: '/projects' },
          { label: project.title, path: `/projects/${slug}` },
        ]}
      />

      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Project Image */}
          <div className='relative h-[400px] rounded-lg overflow-hidden'>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className='object-cover'
              priority
              loading='lazy'
            />
          </div>

          {/* Project Details */}
          <div className='space-y-6'>
            <div>
              <span className='inline-block px-4 py-2 bg-construction-blue/10 text-construction-blue rounded-full text-sm font-medium'>
                {project.category}
              </span>
            </div>

            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
              {project.title}
            </h1>

            <p className='text-gray-600 dark:text-gray-300 text-lg'>
              {project.description}
            </p>

            {project.content && (
              <div className='prose dark:prose-invert max-w-none'>
                <p>{project.content}</p>
              </div>
            )}

            <div className='grid grid-cols-2 gap-4 pt-6'>
              {project.completionDate && (
                <div>
                  <h3 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                    تاريخ الإنجاز
                  </h3>
                  <p className='mt-1 text-gray-900 dark:text-white'>
                    {project.completionDate}
                  </p>
                </div>
              )}

              {project.location && (
                <div>
                  <h3 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                    الموقع
                  </h3>
                  <p className='mt-1 text-gray-900 dark:text-white'>
                    {project.location}
                  </p>
                </div>
              )}

              {project.client && (
                <div>
                  <h3 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                    العميل
                  </h3>
                  <p className='mt-1 text-gray-900 dark:text-white'>
                    {project.client}
                  </p>
                </div>
              )}
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
            '@type': 'Project',
            name: project.title,
            description: project.description,
            image: project.image,
            completionDate: project.completionDate,
            location: project.location,
            client: project.client,
            url: `https://diar-construction.vercel.app/projects/${slug}`,
          }),
        }}
      />
    </>
  )
}
