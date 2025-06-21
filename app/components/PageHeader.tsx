'use client'
import React from 'react'
import '../styles/components/pageHeader.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface PageHeaderProps {
  title: string

  breadcrumbs?: {
    label: string
    path: string
  }[]
  backgroundImage?: string
  backgroundClass?: string
}

// Mapping of routes to background images
const pageBackgrounds = {
  '/': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80', // Company mission
  '/about':
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Team/History
  '/contact':
    'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80', // Communication
  '/gallery':
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80', // Showcase
  '/news':
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // News/Updates
  '/projects':
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Construction
  '/services':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Services
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs,
  backgroundImage,
  backgroundClass,
}) => {
  const pathname = usePathname()
  const defaultBackground =
    pageBackgrounds[pathname as keyof typeof pageBackgrounds] ||
    pageBackgrounds['/']

  return (
    <div
      className={`page-header ${backgroundClass || ''}`}
      style={{
        backgroundImage: `url(${backgroundImage || defaultBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='page-header-overlay'></div>
      <div className='page-header-accent'></div>
      <div className='page-header-content'>
        <h1 className='page-header-title'>{title}</h1>

        {breadcrumbs && (
          <div className={`page-header-breadcrumbs rtl`}>
            {breadcrumbs.map((item, index, array) => (
              <React.Fragment key={item.path}>
                <Link href={item.path} className='breadcrumb-link'>
                  {item.label}
                </Link>
                {index < array.length - 1 && (
                  <span className='breadcrumb-separator'>/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PageHeader
