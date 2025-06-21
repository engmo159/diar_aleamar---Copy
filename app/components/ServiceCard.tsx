import React from 'react'
import Link from 'next/link'
import '../styles/components/serviceCard.css'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
  backgroundImage?: string // إضافة خاصية الخلفية
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link = '/services',
}) => {
  return (
    <div className='service-card'>
      <div className='service-card-header'>
        <div className='service-card-icon'>{icon}</div>
        <h3 className={`service-card-title font-arabic`}>{title}</h3>
      </div>
      <div className='service-card-content'>
        <p className='service-card-description'>{description}</p>
      </div>
      <div className='service-card-footer'>
        <Link href={link} className='service-card-button'>
          اقرا المزيد
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
