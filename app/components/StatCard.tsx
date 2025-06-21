'use client'
import React from 'react'
import { Card, CardContent } from './ui/card'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface StatCardProps {
  value: string
  label: string
  icon?: React.ReactNode
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => {
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0
  const suffix = value.replace(/[0-9]/g, '')

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className='border bg-card shadow-sm'>
        <CardContent className='p-6'>
          <div className='flex flex-col items-center text-center space-y-2'>
            {icon && (
              <div className='text-construction-yellow mb-2'>{icon}</div>
            )}
            <div className='text-4xl font-bold'>
              {inView ? <CountUp end={numericValue} duration={2} /> : 0}
              {suffix}
            </div>
            <div className='text-muted-foreground'>{label}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default StatCard
