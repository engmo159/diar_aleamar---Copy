import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import Image from 'next/image' // استيراد Image من Next.js

interface TestimonialCardProps {
  quote: string

  author: string

  position: string

  image?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  image = 'https://randomuser.me/api/portraits/men/1.jpg',
}) => {
  return (
    <Card className='border shadow-md h-full flex flex-col'>
      <CardContent className='pt-6 flex-grow'>
        <div className='flex justify-start mb-4'>
          <svg
            width='45'
            height='36'
            viewBox='0 0 45 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='text-construction-yellow'
          >
            <path
              d='M13.32 35.9999C8.88 35.9999 5.4 34.3999 2.88 31.1999C0.96 28.3999 0 24.7999 0 20.3999C0 14.7999 1.44 10.1999 4.32 6.59988C7.2 2.99988 11.76 0.799878 18 0.199878L19.44 4.19988C15.12 4.91988 11.76 6.35988 9.36 8.51988C6.96 10.6799 5.76 13.5599 5.76 17.1999H6.48C7.92 17.1999 9.12 17.5999 10.08 18.3999C11.04 19.1999 11.52 20.3599 11.52 21.8399C11.52 23.9199 12.48 25.1599 14.4 25.5599C16.32 25.9599 17.28 27.5599 17.28 30.3599C17.28 31.9199 16.8 33.1599 15.84 34.0399C14.88 35.0799 13.32 35.9999 13.32 35.9999ZM40.32 35.9999C35.88 35.9999 32.4 34.3999 29.88 31.1999C27.96 28.3999 27 24.7999 27 20.3999C27 14.7999 28.44 10.1999 31.32 6.59988C34.2 2.99988 38.76 0.799878 45 0.199878L46.44 4.19988C42.12 4.91988 38.76 6.35988 36.36 8.51988C33.96 10.6799 32.76 13.5599 32.76 17.1999H33.48C34.92 17.1999 36.12 17.5999 37.08 18.3999C38.04 19.1999 38.52 20.3599 38.52 21.8399C38.52 23.9199 39.48 25.1599 41.4 25.5599C43.32 25.9599 44.28 27.5599 44.28 30.3599C44.28 31.9199 43.8 33.1599 42.84 34.0399C41.88 35.0799 40.32 35.9999 40.32 35.9999Z'
              fill='currentColor'
            />
          </svg>
        </div>
        <p className='text-lg mb-4'>{quote}</p>
      </CardContent>
      <CardFooter className='border-t pt-4'>
        <div className='flex items-center space-x-4 rtl:space-x-reverse'>
          <div className='h-12 w-12 rounded-full overflow-hidden'>
            {/* استبدال img بـ Image */}
            <Image
              src={image}
              alt={author}
              width={48} // تحديد العرض
              height={48} // تحديد الارتفاع
              className='h-full w-full object-cover'
              loading='lazy' // تحميل الصورة بشكل كسول
            />
          </div>
          <div>
            <h4 className='font-medium'>{author}</h4>
            <p className='text-sm text-muted-foreground'>{position}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TestimonialCard
