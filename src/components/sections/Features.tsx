'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Shield, 
  Sprout 
} from 'lucide-react'
import { 
  fadeInUp,
  getAnimationProps,
  getStaggerContainerProps,
  defaultViewport,
  STAGGER_DELAYS
} from '@/lib/animations'

// Feature data configuration
const FEATURES = [
  {
    id: "rewire-brain",
    icon: <Brain />,
    title: "Rewire Your Brain",
    description: "Our neuroscience-based system helps reset your habits and break the gambling addiction cycle through proven cognitive techniques."
  },
  {
    id: "track-streak",
    icon: <TrendingUp />,
    title: "Track Your Streak",
    description: "Monitor your clean streak with daily check-ins, mood tracking, and progress visualization to stay motivated on your recovery journey."
  },
  {
    id: "community-support",
    icon: <Users />,
    title: "Community Support",
    description: "Connect with others in recovery through our built-in support forum, share experiences, and get encouragement when you need it most."
  },
  {
    id: "relapse-tools",
    icon: <Shield />,
    title: "Relapse Recovery Tools",
    description: "Access structured support and recovery strategies when facing setbacks, with immediate help and guidance to get back on track."
  },
  {
    id: "growth-program",
    icon: <Sprout />,
    title: "Growth Program",
    description: "Follow personalized one-month improvement plans designed to build healthy habits and create lasting positive change in your life."
  }
]

const Features: React.FC = () => {
  return (
    <section 
      id="features" 
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[var(--color-black)] to-[var(--color-gray-900)]"
      aria-labelledby="features-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            id="features-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
            {...getAnimationProps(fadeInUp, defaultViewport)}
          >
            Why{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              CASH OUT?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            {...getAnimationProps(fadeInUp, defaultViewport, 0.2)}
          >
            Our comprehensive approach combines proven recovery methods with modern technology 
            to give you the tools you need to break free from gambling addiction.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          role="list"
          aria-label="CASH OUT app features"
          {...getStaggerContainerProps(STAGGER_DELAYS.feature, defaultViewport)}
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * STAGGER_DELAYS.feature}
              className="h-full"
              role="listitem"
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          {...getAnimationProps(fadeInUp, defaultViewport, 0.6)}
        >
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 px-4 sm:px-0">
            Ready to take control of your life?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-sm text-gray-500 px-4 sm:px-0 text-center">
              Join thousands who have already started their recovery journey
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export { Features }