import { Metadata } from 'next'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export const metadata: Metadata = {
  title: 'مشاريعنا | شركة ديار الإعمار',
  description:
    'تعرف على مشاريع شركة ديار الإعمار في المملكة العربية السعودية. نقدم مجموعة متنوعة من المشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة.',
  keywords: [
    'مشاريع البناء',
    'المشاريع السكنية',
    'المشاريع التجارية',
    'المشاريع الصناعية',
    'شركة ديار الإعمار',
    'مقاولات عامة',
    'إنشاءات',
  ],
  alternates: {
    canonical: 'https://diarconstruction.netlify.app/projects',
  },
  openGraph: {
    title: 'مشاريعنا | شركة ديار الإعمار',
    description:
      'اكتشف مجموعة متنوعة من مشاريع البناء التي قمنا بتنفيذها في المملكة العربية السعودية، من المشاريع السكنية إلى التجارية والصناعية.',
    url: 'https://diarconstruction.netlify.app/projects',
    siteName: 'شركة ديار الإعمار',
    type: 'website',
    locale: 'ar_SA',
  },
}

const Projects = () => {
  return (
    <>
      <PageHeader
        title='مشاريعنا'
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'مشاريعنا', path: '/projects' },
        ]}
      />

      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: projects.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Project',
                name: project.title,
                description:
                  project.description ||
                  `مشروع ${project.category} من شركة ديار الإعمار`,
                image: project.image,
                url: `https://diarconstruction.netlify.app${project.link}`,
                location: project.location,
                client: project.client,
                completionDate: project.completionDate,
              },
            })),
          }),
        }}
      />
    </>
  )
}

export default Projects
