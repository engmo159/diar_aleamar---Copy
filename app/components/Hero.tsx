'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'

interface Slide {
  image: string
  title: string
  subtitle: string
}

interface HeroProps {
  slides: Slide[]
  ctaText?: string
  ctaLink?: string
}

const Hero: React.FC<HeroProps> = ({
  slides,
  ctaText,
  ctaLink = '/contact',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(slides.length).fill(false)
  )
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [currentIndex, slides.length])

  const startAutoSlide = () => {
    stopAutoSlide()
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length)
    }, 10000)
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }

  // أزرار التنقل اليدوي
  const goToPrev = () => {
    stopAutoSlide()
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length)
    startAutoSlide()
  }

  const goToNext = () => {
    stopAutoSlide()
    setCurrentIndex(prev => (prev + 1) % slides.length)
    startAutoSlide()
  }

  return (
    <div
      className='relative overflow-hidden text-white'
      style={{ minHeight: '90vh' }}
    >
      {slides.map((slide, index) => {
        const isCurrent = index === currentIndex

        return (
          <div
            key={index}
            aria-hidden={!isCurrent}
            className={`absolute inset-0 w-full h-full transition-transform ease-in-out ${
              isCurrent
                ? 'translate-x-0 z-20 opacity-100'
                : '-translate-x-full z-10 opacity-0'
            }`}
            style={{ transitionDuration: '3s' }}
          >
            <div className='absolute inset-0'>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                quality={75}
                sizes='100vw'
                className='object-cover'
                onLoad={() => handleImageLoad(index)}
                priority={isCurrent}
                loading={isCurrent ? 'eager' : 'lazy'}
                placeholder='blur'
                blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU4Ojo4Oj5FRkZGRkZGRkZGRkZGRkZGRkb/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
              />
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-60'></div>
          </div>
        )
      })}

      {/* Yellow diagonal accent */}
      <div className='absolute bottom-0 left-0 w-full h-20 bg-construction-yellow transform -skew-y-3 translate-y-8'></div>
      <Image
        src='https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/khn0dbra3ghhotdrqp6t'
        width={200}
        height={200}
        priority
        alt='Company Logo'
        className='absolute top-1 left-4 z-40'
      />

      {/* النص مع شرط انتظار تحميل الصورة */}
      <div className='absolute inset-0 flex items-center justify-center z-30 px-4'>
        {imagesLoaded[currentIndex] && (
          <div
            className='animate-text-appear w-full flex items-center justify-center flex-col'
            aria-live='polite'
          >
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight mb-6 drop-shadow-lg md:mx-20 text-center md:text-right md:ml-auto'>
              {slides[currentIndex].title}
            </h1>
            <p className='text-2xl md:text-3xl lg:text-4xl mb-10 text-gray-200 drop-shadow-md mx-auto text-center'>
              {slides[currentIndex].subtitle}
            </p>
            {ctaText && (
              <Button
                size='lg'
                className='bg-construction-yellow text-construction-blue hover:bg-yellow-400 rounded-full shadow-xl text-xl px-8 py-4 mx-auto'
                asChild
              >
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {/* أزرار التنقل اليدوي */}
      <div className='absolute bottom-8 right-8 flex gap-4 z-40'>
        <button
          aria-label='السابق'
          onClick={goToPrev}
          className='bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'
        >
          &#8592;
        </button>
        <button
          aria-label='التالي'
          onClick={goToNext}
          className='bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'
        >
          &#8594;
        </button>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes text-appear {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-text-appear {
          animation: text-appear 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Hero
