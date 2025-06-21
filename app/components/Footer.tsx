'use client'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { title: 'من نحن', path: '/about' },
      { title: 'خدماتنا', path: '/services' },
      { title: 'المشاريع', path: '/projects' },
      { title: 'الأخبار', path: '/news' },
    ],
    support: [
      { title: 'اتصل بنا', path: '/contact' },
      { title: 'الأسئلة الشائعة', path: '/faq' },
      // { title: 'وظائف', path: '/careers' },
      // { title: 'سياسة الخصوصية', path: '/privacy' },
    ],
  }

  return (
    <footer className='bg-construction-blue text-white pt-16 pb-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Company Info */}
          <section
            aria-labelledby='company-info'
            className='flex flex-col items-center justify-center'
          >
            <div className='bg-construction-yellow p-1 rounded'>
              <h1 className='text-construction-blue font-bold text-xl'>
                ديار الإعمار
              </h1>
            </div>

            <p className='text-gray-300 max-w-xs'>
              شركة مقاولات تعمل بالمملكة العربية السعودية المدينة المنورة رائدة
              في مجال البناء والتشييد والتطوير العقاري. نحن ملتزمون بتقديم أعلى
              معايير الجودة والسلامة.
            </p>

            <address className='not-italic flex space-x-4 rtl:space-x-reverse'>
              {/* Social Icons */}
              <Link
                href='#'
                aria-label='صفحة فيسبوك'
                className='hover:text-construction-yellow transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                {/* Facebook */}
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12c0-5.523-4.477-10...z' />
                </svg>
              </Link>
              <Link
                href='#'
                aria-label='حساب تويتر'
                className='hover:text-construction-yellow transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                {/* Twitter */}
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.29 20.251c7.547 0 11.675-6.253...' />
                </svg>
              </Link>
              <Link
                href='#'
                aria-label='حساب إنستغرام'
                className='hover:text-construction-yellow transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                {/* Instagram */}
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12.315 2c2.43 0...' />
                </svg>
              </Link>
            </address>
          </section>

          {/* Company Links */}
          <section aria-labelledby='company-links'>
            <h3 id='company-links' className='font-bold text-lg mb-4'>
              الشركة
            </h3>
            <ul className='space-y-2'>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className='text-gray-300 hover:text-construction-yellow transition-colors'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Support Links */}
          <section aria-labelledby='support-links'>
            <h3 id='support-links' className='font-bold text-lg mb-4'>
              الدعم
            </h3>
            <ul className='space-y-2'>
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className='text-gray-300 hover:text-construction-yellow transition-colors'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Copyright */}
        <div className='pt-8 mt-8 border-t border-gray-700 text-center text-gray-300 text-sm'>
          <p>شركة ديار الإعمار. جميع الحقوق محفوظة © {currentYear}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
