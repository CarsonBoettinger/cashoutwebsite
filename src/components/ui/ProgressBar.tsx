'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  color?: 'primary' | 'blue' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  showValue?: boolean
  className?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  color = 'primary',
  size = 'md',
  animated = true,
  showValue = true,
  className
}) => {
  const [displayValue, setDisplayValue] = useState(0)
  const percentage = Math.min((value / max) * 100, 100)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value)
      }, 200)
      return () => clearTimeout(timer)
    } else {
      setDisplayValue(value)
    }
  }, [value, animated])

  const colorClasses = {
    primary: 'from-[var(--color-primary)] to-[var(--color-primary-light)]',
    blue: 'from-[var(--color-blue)] to-[var(--color-blue-light)]',
    success: 'from-[var(--color-success)] to-[var(--color-success)]',
    warning: 'from-[var(--color-warning)] to-[var(--color-warning)]'
  }

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  }

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-gray-300">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm font-bold text-white">
              {Math.round(displayValue)}{max === 100 ? '%' : `/${max}`}
            </span>
          )}
        </div>
      )}
      
      <div className={cn(
        'w-full bg-[var(--color-gray-800)] rounded-full overflow-hidden',
        sizeClasses[size]
      )}>
        <motion.div
          className={cn(
            'h-full bg-gradient-to-r rounded-full',
            colorClasses[color]
          )}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration: animated ? 1.2 : 0, 
            ease: "easeOut",
            delay: animated ? 0.3 : 0
          }}
        />
      </div>
    </div>
  )
}

export { ProgressBar, type ProgressBarProps }