'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '../../hooks/useTheme'
import { Button } from './ui/button'
import { Moon, Sun, Menu } from 'lucide-react'

const navItems = [
  { en: 'Home', ar: 'الرئيسية', path: '/' },
  { en: 'About Us', ar: 'من نحن', path: '/about' },
  { en: 'Services', ar: 'خدماتنا', path: '/services' },
  { en: 'Projects', ar: 'المشاريع', path: '/projects' },
  { en: 'News', ar: 'الأخبار', path: '/news' },
  { en: 'Gallery', ar: 'معرض الصور', path: '/gallery' },
  { en: 'Contact', ar: 'اتصل بنا', path: '/contact' },
  { en: 'FAQ', ar: 'الأسئلة الشائعة', path: '/faq' },
]

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true) // ✅
  }, [])

  if (!hasMounted) return null

  //whatsapp link
  const whatsappNumber = '966543401165' // ← اكتب هنا رقم الواتساب بدون +
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  return (
    <header className='sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b dark:border-gray-800'>
      <div className='container mx-auto px-1 py-4 flex items-center justify-between'>
        <Link
          href={'/'}
          className=' bg-construction-yellow rounded p-1 md:p-2 flex align-middle items-center ml-1 md:ml-0'
        >
          <span className='text-construction-blue font-bold text-xs sm:text-sm md:text-lg text-center'>
            ديار الإعمار العالمية للمقاولات
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center space-x-8 rtl:space-x-reverse'>
          {navItems.map(item => (
            <Link
              key={item.path}
              href={item.path}
              className='text-foreground hover:text-construction-yellow transition-colors'
            >
              {item.ar}
            </Link>
          ))}
        </nav>

        {/* Right side controls */}
        <div className='flex items-center gap-4'>
          {/* زر استشارة مجانية */}
          <Link href={whatsappLink} target='_blank' rel='noopener noreferrer'>
            <Button className='rounded-full text-wrap text-white font-bold hover:!bg-green-900 !bg-green-500  '>
              استشارة مجانية عبر الواتساب
            </Button>
          </Link>
          <Button
            variant='outline'
            size='icon'
            onClick={toggleTheme}
            className='rounded-full'
            aria-label={
              isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {isDarkMode ? (
              <Sun className='h-5 w-5' />
            ) : (
              <Moon className='h-5 w-5' />
            )}
          </Button>

          <Button
            variant='outline'
            size='icon'
            className='lg:hidden rounded-full'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className='h-5 w-5' />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className='lg:hidden border-t dark:border-gray-800'>
          <nav className='container mx-auto px-4 py-4 flex flex-col space-y-6'>
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                className='text-foreground hover:text-construction-yellow transition-colors py-3 px-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.ar}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
