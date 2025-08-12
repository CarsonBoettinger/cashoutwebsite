'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { AnimatedCounter } from './AnimatedCounter'
import { Calendar, Flame, Trophy } from 'lucide-react'

interface StreakDisplayProps {
  days: number
  hours?: number
  minutes?: number
  variant?: 'compact' | 'detailed' | 'hero'
  showIcon?: boolean
  className?: string
}

const StreakDisplay: React.FC<StreakDisplayProps> = ({
  days,
  hours = 0,
  minutes = 0,
  variant = 'detailed',
  showIcon = true,
  className
}) => {
  const formatTimeUnit = (value: number, unit: string) => {
    if (value === 0) return null
    return `${value} ${unit}${value !== 1 ? 's' : ''}`
  }

  const timeUnits = [
    formatTimeUnit(days, 'day'),
    formatTimeUnit(hours, 'hour'),
    formatTimeUnit(minutes, 'minute')
  ].filter(Boolean)

  if (variant === 'compact') {
    return (
      <motion.div
        className={cn(
          'flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 rounded-full border border-[var(--color-primary)]/30',
          className
        )}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {showIcon && <Flame className="w-4 h-4 text-[var(--color-primary)]" />}
        <AnimatedCounter 
          value={days} 
          size="sm" 
          color="primary" 
          suffix=" days clean"
        />
      </motion.div>
    )
  }

  if (variant === 'hero') {
    return (
      <motion.div
        className={cn(
          'text-center p-8 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-2xl border border-[var(--color-primary)]/30',
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full">
            <Trophy className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="mb-2">
          <AnimatedCounter 
            value={days} 
            size="xl" 
            color="primary" 
            duration={2.5}
          />
        </div>
        
        <p className="text-lg font-semibold text-white mb-1">
          Days Clean
        </p>
        
        {(hours > 0 || minutes > 0) && (
          <p className="text-sm text-gray-400">
            {timeUnits.slice(1).join(', ')}
          </p>
        )}
      </motion.div>
    )
  }

  // Default detailed variant
  return (
    <motion.div
      className={cn(
        'p-6 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl border border-[var(--color-gray-700)]',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4">
        {showIcon && (
          <div className="p-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg">
            <Calendar className="w-5 h-5 text-white" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-white">
          Current Streak
        </h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-baseline gap-2">
          <AnimatedCounter 
            value={days} 
            size="lg" 
            color="primary" 
            duration={2}
          />
          <span className="text-lg font-medium text-gray-300">
            {days === 1 ? 'day' : 'days'}
          </span>
        </div>
        
        {(hours > 0 || minutes > 0) && (
          <div className="flex gap-4 text-sm text-gray-400">
            {hours > 0 && (
              <span>
                <AnimatedCounter 
                  value={hours} 
                  size="sm" 
                  color="gray" 
                  duration={1.5}
                  delay={0.5}
                /> hours
              </span>
            )}
            {minutes > 0 && (
              <span>
                <AnimatedCounter 
                  value={minutes} 
                  size="sm" 
                  color="gray" 
                  duration={1}
                  delay={0.8}
                /> minutes
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export { StreakDisplay, type StreakDisplayProps }