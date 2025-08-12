'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { featureCardVariants, getAnimationProps, defaultViewport } from '@/lib/animations'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
  className?: string
  role?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  className,
  role
}) => {
  return (
    <motion.div
      {...getAnimationProps(featureCardVariants, defaultViewport, delay)}
      className={cn(
        "group relative",
        className
      )}
      role={role}
    >
      <div className="relative h-full p-6 sm:p-8 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl sm:rounded-2xl border border-[var(--color-gray-700)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-[var(--color-primary)]/30">
        {/* Icon Container */}
        <div 
          className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        >
          <div className="text-white text-xl sm:text-2xl">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[var(--color-primary-light)] transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}

export { FeatureCard, type FeatureCardProps }