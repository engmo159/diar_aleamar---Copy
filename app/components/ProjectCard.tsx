import React from 'react'
import { Card, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  category: string
  image: string
  link?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image,
  link = '#',
}) => {
  return (
    <Card className='overflow-hidden group hover:shadow-lg transition-shadow duration-300'>
      <div className='relative h-48'>
        <Image
          src={image}
          alt={title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          loading='lazy'
          quality={75}
        />
      </div>
      <div className='p-4'>
        <span className='inline-block px-2 py-1 text-xs font-semibold text-construction-blue bg-construction-blue/10 rounded-full mb-2'>
          {category}
        </span>
        <CardTitle className='text-lg font-bold mb-2 line-clamp-2'>
          {title}
        </CardTitle>
        <Link href={link}>
          <Button variant='outline' className='w-full'>
            عرض التفاصيل
          </Button>
        </Link>
      </div>
    </Card>
  )
}

export default ProjectCard
