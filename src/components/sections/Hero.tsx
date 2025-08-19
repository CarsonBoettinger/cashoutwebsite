'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AppStoreButtons } from '@/components/icons/AppStoreButtons'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
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
    const nextSection = document.querySelector('#app-showcase')
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Trust Badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            </motion.div>

            {/* Main Headline with Gradient Text Effect */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8"
              {...getAnimationProps(heroTitleVariants, defaultViewport)}
              id="hero-heading"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-[var(--color-primary-light)] bg-clip-text text-transparent">
                Quit Gambling
              </span>
              <br />
              <span className="bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-primary)] to-white bg-clip-text text-transparent">
                For Life With CASH OUT
              </span>
            </motion.h1>

            {/* Descriptive Subtext */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-10 lg:mb-12"
              {...getAnimationProps(heroSubtitleVariants, defaultViewport)}
              id="hero-description"
            >
              Meet CASH OUT, the #1 app for quitting gambling with all the tools included to make the process easier for you.
            </motion.p>

            {/* App Store Buttons */}
            <motion.div
              className="mb-8 sm:mb-10"
              {...getAnimationProps(heroButtonsVariants, defaultViewport)}
            >
              <AppStoreButtons 
                variant="primary"
                layout="horizontal"
                className="justify-center lg:justify-start flex-col sm:flex-row gap-3 sm:gap-4"
              />
            </motion.div>
          </div>

          {/* Right Column - Phone Image (Desktop) */}
          <motion.div
            className="hidden lg:flex justify-end order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Phone with app screen */}
              <div className="w-[28rem] sm:w-[32rem] lg:w-[36rem] h-auto">
                <Image
                  src="/HomescreenCASHOUT.png"
                  alt="CASH OUT app home screen - gambling recovery app"
                  width={576}
                  height={1152}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Phone Image - Centered below text */}
          <motion.div
            className="lg:hidden order-last"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-[28rem] sm:w-[32rem] h-auto">
                  <Image
                    src="/HomescreenCASHOUT.png"
                    alt="CASH OUT app home screen - gambling recovery app"
                    width={576}
                    height={1152}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
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
          aria-label="Scroll to app showcase section"
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