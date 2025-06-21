import { Project } from './projects'

export interface NewsArticle {
  id: string
  title: string
  content: string
  publicationDate: string
  image: string
  projectId: string // Reference to the project
  project?: Project // The actual project data
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'افتتاح مجمع سكني راقٍ في العاصمة الإدارية',
    content:
      'تم افتتاح المجمع السكني الراقي في العاصمة الإدارية الجديدة، والذي يضم أكثر من 100 وحدة سكنية بتشطيبات فاخرة ومرافق خدمية متكاملة. المشروع يمثل نقلة نوعية في مجال الإسكان الفاخر في المنطقة.',
    publicationDate: '2024-03-15',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    projectId: 'new-capital-residential',
  },
  {
    id: '2',
    title: 'تطوير مبنى هيئة التأمينات يفتح أبوابه',
    content:
      'تم افتتاح مبنى هيئة التأمينات الاجتماعية الجديد في بركة السبع، والذي تم تجهيزه بأحدث التقنيات والمرافق لخدمة المواطنين. المبنى يضم مكاتب إدارية متطورة وقاعات اجتماعات مجهزة بأحدث التقنيات.',
    publicationDate: '2024-02-20',
    image:
      'https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/v1/%D9%85%D9%88%D9%82%D8%B9%20%D8%AF%D9%8A%D8%A7%D8%B1%20%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D8%B1/lmfd66qpdr7qppxweggd',
    projectId: 'social-insurance-building',
  },
  {
    id: '3',
    title: 'شركة ديار الإعمار تعلن عن مشاريع جديدة',
    content:
      'أعلنت شركة ديار الإعمار عن بدء العمل في مجموعة جديدة من المشاريع السكنية والتجارية في مختلف أنحاء الجمهورية. الشركة تستهدف توسيع نطاق عملياتها وتقديم المزيد من الخدمات المتميزة.',
    publicationDate: '2024-01-10',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    projectId: 'new-capital-residential',
  },
]

export default newsArticles
