'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ProgressVisualization } from '@/components/ui/ProgressVisualization'
import { 
  fadeInUp,
  progressMockupVariants,
  progressContentVariants,
  getAnimationProps,
  defaultViewport
} from '@/lib/animations'
import { Button } from '@/components/ui/Button'
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  Brain,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Progress: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Real-time Analytics',
      description: 'Track your progress with detailed statistics and visual insights that update in real-time.'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Goal Setting',
      description: 'Set personalized milestones and celebrate achievements as you reach each recovery goal.'
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: 'Mental Health Tracking',
      description: 'Monitor your mental wellness with mood tracking and cognitive improvement metrics.'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Holistic Recovery',
      description: 'Track not just gambling habits, but overall life improvements including sleep, relationships, and finances.'
    }
  ]

  const benefits = [
    'Visual progress tracking keeps you motivated',
    'Data-driven insights help identify patterns',
    'Milestone celebrations boost confidence',
    'Community comparison shows you\'re not alone',
    'Historical data proves your improvement'
  ]

  return (
    <section id="progress" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[var(--color-black)] to-[var(--color-gray-900)]">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          {...getAnimationProps(fadeInUp, defaultViewport)}
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
            <span className="bg-gradient-to-r from-white to-[var(--color-primary-light)] bg-clip-text text-transparent">
              Track Your Recovery
            </span>
            <br />
            <span className="text-[var(--color-primary)]">
              Every Step Counts
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Visualize your journey with comprehensive progress tracking. See your streak grow, 
            monitor your mental health, and celebrate every milestone on your path to recovery.
          </p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Progress Visualization Mockup */}
          <motion.div
            className="order-2 lg:order-1"
            {...getAnimationProps(progressMockupVariants, defaultViewport, 0.2)}
          >
            {/* Mobile: Stack vertically, Desktop: Show mockup */}
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-blue)]/5 rounded-3xl transform rotate-1" />
              
              {/* Main Mockup Container */}
              <div className="relative bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl sm:rounded-2xl border border-[var(--color-gray-700)] p-4 sm:p-6 shadow-2xl">
                {/* Mockup Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[var(--color-gray-700)]">
                  <div className="flex gap-1 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-400 ml-2 sm:ml-4 truncate">
                    CASH OUT - Progress Dashboard
                  </span>
                </div>

                {/* Progress Visualization */}
                <ProgressVisualization variant="mockup" />
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 p-2 sm:p-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg sm:rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-white">47</div>
                  <div className="text-xs text-white/80">Days Clean</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 p-2 sm:p-3 bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-blue-light)] rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  <span className="text-xs sm:text-sm font-medium text-white">Protected</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Descriptive Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-6 sm:space-y-8"
            {...getAnimationProps(progressContentVariants, defaultViewport, 0.4)}
          >
            {/* Key Features */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
                Comprehensive Progress Insights
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-[var(--color-gray-800)]/50 rounded-lg sm:rounded-xl border border-[var(--color-gray-700)]/50 hover:border-[var(--color-primary)]/30 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 p-1.5 sm:p-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits List */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
                Why Progress Tracking Works
              </h3>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start gap-2 sm:gap-3 px-4 sm:px-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="pt-4 sm:pt-6 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto"
              >
                <span className="text-sm sm:text-base">Start Tracking Your Progress</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <p className="text-xs sm:text-sm text-gray-400 mt-3 text-center sm:text-left">
                Join thousands who are successfully tracking their recovery journey
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Statistics Section */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 border-t border-[var(--color-gray-800)]"
          {...getAnimationProps(fadeInUp, defaultViewport, 0.2)}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
              Real Results from Real People
            </h3>
            <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Our progress tracking system has helped thousands of people stay motivated 
              and achieve their recovery goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '89%', label: 'Report Better Motivation', delay: 0 },
              { value: '76%', label: 'Achieve 30-Day Milestone', delay: 0.1 },
              { value: '92%', label: 'Find Tracking Helpful', delay: 0.2 },
              { value: '68%', label: 'Reach 90-Day Goal', delay: 0.3 }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 leading-tight px-2 sm:px-0">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export { Progress }