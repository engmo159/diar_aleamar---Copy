import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

interface CallToActionProps {
  title: string
  description: string
  buttonText: string

  buttonLink?: string
  backgroundColor?: string
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink = '/contact',
  backgroundColor = 'bg-construction-blue',
}) => {
  return (
    <section className={`${backgroundColor} py-16 text-right`}>
      <div className='container mx-auto px-4 text-center'>
        <div className='max-w-3xl mx-auto text-white'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>{title}</h2>
          <p className='text-lg mb-8 text-gray-200'>{description}</p>
          <Link href={buttonLink} passHref>
            <Button
              size='lg'
              className='bg-construction-yellow text-construction-blue hover:bg-yellow-400'
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
