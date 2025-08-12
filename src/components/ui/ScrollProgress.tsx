'use client'

import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { prefersReducedMotion } from '@/lib/accessibility'

interface ScrollProgressProps {
  className?: string
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const reducedMotion = prefersReducedMotion()

  if (reducedMotion) {
    return null
  }

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] transform-gpu z-50 ${className}`}
      style={{ scaleX, transformOrigin: '0%' }}
      initial={{ scaleX: 0 }}
      aria-hidden="true"
    />
  )
}

export { ScrollProgress }