'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AppStoreButtons } from '@/components/icons/AppStoreButtons'
import { 
  ctaBannerVariants,
  fadeInUp,
  getAnimationProps,
  defaultViewport
} from '@/lib/animations'

const CTA: React.FC = () => {
  const handleDownloadClick = () => {
    // Scroll to app store buttons or trigger download modal
    const appStoreSection = document.querySelector('[data-app-store-buttons]')
    if (appStoreSection) {
      appStoreSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-blue)] opacity-90" />
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/3 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h2 
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white"
            {...getAnimationProps(ctaBannerVariants, defaultViewport)}
          >
            It&apos;s time to cash out of the casino and into your life.
          </motion.h2>

          {/* Subtext with Social Proof */}
          <motion.p 
            id="cta-description"
            className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto"
            {...getAnimationProps(fadeInUp, defaultViewport, 0.2)}
          >
            Join thousands of people breaking free from gambling addiction.
            <br />
            <span className="text-white/80 text-base sm:text-lg">
              Start your recovery journey today with personalized support and proven strategies.
            </span>
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            className="mb-12"
            {...getAnimationProps(fadeInUp, defaultViewport, 0.4)}
          >
            <Button
              size="lg"
              onClick={handleDownloadClick}
              className="bg-white text-[var(--color-primary)] hover:bg-gray-100 hover:text-[var(--color-primary-dark)] shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold px-12 py-4 text-xl border-2 border-transparent hover:border-white/20 group"
              aria-describedby="cta-description"
            >
              <span className="flex items-center space-x-3">
                <span>Download Now</span>
                <motion.svg 
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 4v16m8-8l-8 8-8-8" 
                  />
                </motion.svg>
              </span>
            </Button>
          </motion.div>

          {/* App Store Buttons */}
          <motion.div
            data-app-store-buttons
            {...getAnimationProps(fadeInUp, defaultViewport, 0.6)}
          >
            <AppStoreButtons 
              variant="secondary"
              layout="horizontal"
              className="justify-center"
            />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20"
            {...getAnimationProps(fadeInUp, defaultViewport, 0.8)}
          >
            <div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70"
              role="list"
              aria-label="App benefits"
            >
              <div className="flex items-center space-x-2" role="listitem">
                <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Free to Download</span>
              </div>
              <div className="flex items-center space-x-2" role="listitem">
                <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Privacy Protected</span>
              </div>
              <div className="flex items-center space-x-2" role="listitem">
                <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">Highly Rated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export { CTA }