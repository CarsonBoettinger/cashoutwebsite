'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'testimonial' | 'feature'
  hover?: boolean
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  variant = 'default',
  hover = true 
}) => {
  const baseStyles = 'rounded-xl border border-[var(--color-gray-800)] bg-[var(--color-gray-900)] transition-all duration-300'
  
  const variants = {
    default: 'p-6',
    testimonial: 'p-8 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)]',
    feature: 'p-6 text-center'
  }

  const hoverStyles = hover 
    ? 'hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1 hover:border-[var(--color-primary)]/30' 
    : ''

  return (
    <div 
      className={cn(
        baseStyles,
        variants[variant],
        hoverStyles,
        className
      )}
    >
      {children}
    </div>
  )
}

const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn('mb-4', className)}>
    {children}
  </div>
)

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn('', className)}>
    {children}
  </div>
)

const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn('mt-4 pt-4 border-t border-[var(--color-gray-700)]', className)}>
    {children}
  </div>
)

export { Card, CardHeader, CardContent, CardFooter, type CardProps }