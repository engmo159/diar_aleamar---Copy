import React from 'react'
import '../styles/components/sectionHeader.css' // استيراد ملف الـ CSS

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      <h2 className='section-title'>
        {title}
        <span className='section-title-underline'></span>
      </h2>
      {subtitle && <p className='section-subtitle'>{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
