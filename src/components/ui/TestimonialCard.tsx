'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'
import { testimonialCardVariants, getAnimationProps, defaultViewport } from '@/lib/animations'

interface TestimonialCardProps {
  quote: string
  author: string
  timeline: string
  avatar?: string
  delay?: number
  className?: string
  role?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  timeline,
  avatar,
  delay = 0,
  className,
  role
}) => {
  return (
    <motion.div
      {...getAnimationProps(testimonialCardVariants, defaultViewport, delay)}
      className={cn(
        "group relative h-full",
        className
      )}
      role={role}
    >
      <div className="relative h-full p-8 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-2xl border border-[var(--color-gray-700)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-2 hover:border-[var(--color-primary)]/30">
        {/* Quote Icon */}
        <div 
          className="flex items-center justify-center w-12 h-12 mb-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        >
          <Quote className="w-6 h-6 text-white" />
        </div>

        {/* Quote Text */}
        <blockquote className="mb-6">
          <p className="text-gray-100 text-lg leading-relaxed font-medium italic">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        {/* Author Section */}
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {avatar ? (
              <Image
                src={avatar}
                alt={`Profile picture of ${author}`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-primary)]/30"
              />
            ) : (
              <div 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center"
                role="img"
                aria-label={`Profile picture placeholder for ${author}`}
              >
                <span className="text-white font-bold text-lg" aria-hidden="true">
                  {author.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Author Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-base group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
              {author}
            </h4>
            <p className="text-[var(--color-primary)] text-sm font-medium">
              {timeline}
            </p>
          </div>
        </div>

        {/* Decorative gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}

export { TestimonialCard, type TestimonialCardProps }