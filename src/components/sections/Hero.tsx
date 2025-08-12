'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AppStoreButtons } from '@/components/icons/AppStoreButtons'
import { ChevronDown } from 'lucide-react'
import { 
  heroTitleVariants, 
  heroSubtitleVariants, 
  heroButtonsVariants,
  scaleIn,
  getAnimationProps,
  defaultViewport
} from '@/lib/animations'

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#features')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-black)] via-[var(--color-gray-900)] to-[var(--color-black)] px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28"
      aria-label="Hero section - Introduction to CASH OUT gambling recovery app"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline with Gradient Text Effect */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8"
            {...getAnimationProps(heroTitleVariants, defaultViewport)}
            id="hero-heading"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-[var(--color-primary-light)] bg-clip-text text-transparent">
              Regain Control.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-primary)] to-white bg-clip-text text-transparent">
              Rebuild Your Life.
            </span>
          </motion.h1>

          {/* Descriptive Subtext */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto px-2 sm:px-0"
            {...getAnimationProps(heroSubtitleVariants, defaultViewport)}
            id="hero-description"
          >
            CASH OUT is the #1 app for quitting gambling and staying clean—designed to help you break the habit and build a better future.
          </motion.p>

          {/* App Store Buttons */}
          <motion.div
            className="mb-12 sm:mb-14 lg:mb-16"
            {...getAnimationProps(heroButtonsVariants, defaultViewport)}
          >
            <AppStoreButtons 
              variant="primary"
              layout="horizontal"
              className="justify-center flex-col sm:flex-row gap-3 sm:gap-4"
            />
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            className="mb-12 sm:mb-14 lg:mb-16"
            {...getAnimationProps(scaleIn, defaultViewport, 0.6)}
          >
            <div className="relative max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
              <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] bg-gradient-to-br from-[var(--color-gray-800)] to-[var(--color-gray-900)] rounded-xl sm:rounded-2xl border border-[var(--color-gray-700)] shadow-2xl overflow-hidden">
                {/* Placeholder content for hero image/illustration */}
                <div className="flex items-center justify-center h-full p-4 sm:p-6 lg:p-8">
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full flex items-center justify-center"
                      role="img"
                      aria-label="Success checkmark icon representing recovery achievement"
                    >
                      <svg 
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm" aria-hidden="true">
                      Hero Image/Illustration
                      <br />
                      <span className="text-xs opacity-75">Someone looking relieved or empowered</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-[var(--color-primary)] rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-[var(--color-blue)] rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 group touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-black)] rounded-md"
          aria-label="Scroll to features section"
          style={{ minHeight: '48px', minWidth: '48px' }}
        >
          <span className="text-xs sm:text-sm mb-2 opacity-75 group-hover:opacity-100 transition-opacity">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}

export { Hero }