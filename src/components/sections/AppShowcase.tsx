'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

const APP_FEATURES = [
  {
    id: 'home',
    title: 'Home Dashboard',
    description: 'Track your recovery progress with real-time streak monitoring and daily check-ins.',
    image: '/homepageHand.png',
    color: 'from-emerald-500 to-teal-500',
    features: [
      'Real-time streak tracking',
      'Daily mood monitoring',
      'Progress visualization'
    ]
  },
  {
    id: 'analytics',
    title: 'Progress Analytics',
    description: 'Visualize your recovery journey with detailed insights and goal tracking.',
    image: '/analyticsHand.png',
    color: 'from-blue-500 to-purple-500',
    features: [
      'Recovery percentage tracking',
      'Goal setting and milestones',
      'Habit development insights'
    ]
  },
  {
    id: 'library',
    title: 'Recovery Library',
    description: 'Access breathing exercises, educational content, and relaxation resources.',
    image: '/LibraryHand.png',
    color: 'from-green-500 to-cyan-500',
    features: [
      'Breathing exercises',
      'Educational articles',
      'Relaxation sounds'
    ]
  },
  {
    id: 'community',
    title: 'Support Community',
    description: 'Connect with others on their recovery journey and share experiences.',
    image: '/communityHand.png',
    color: 'from-indigo-500 to-blue-500',
    features: [
      'Peer support forum',
      'Share recovery stories',
      'Get encouragement'
    ]
  },
  {
    id: 'panic',
    title: 'Panic Button',
    description: 'Immediate support when you need it most with breathing exercises and crisis tools.',
    image: '/panicHand.png',
    color: 'from-red-500 to-pink-500',
    features: [
      'Immediate crisis support',
      'Guided breathing exercises',
      'Relapse prevention tools'
    ]
  }
]

const AppShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const featureIndex = Math.min(
          APP_FEATURES.length - 1,
          Math.max(0, Math.floor(-top / window.innerHeight))
        );
        setActiveFeature(featureIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial feature

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="app-showcase" 
      className="relative bg-gradient-to-b from-[var(--color-black)] to-[var(--color-gray-900)] pt-32"
      aria-labelledby="app-showcase-heading"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 bg-gradient-to-b from-[var(--color-black)] to-transparent pb-8">
        <Container>
          <div className="text-center">
            <motion.h2 
              id="app-showcase-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Experience the{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                CASH OUT App
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scroll through our key features and see how CASH OUT helps you quit gambling 
              and build a better future, one day at a time.
            </motion.p>
          </div>
        </Container>
      </div>

      {/* App Showcase Container */}
      <div ref={containerRef} className="relative">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="sticky top-36 min-h-screen flex items-center">
            <Container className="relative z-10 w-full">
              <div className="flex">
                {/* Left Side Content */}
                <div className="w-1/2 pr-8">
                  <div className="max-w-lg">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${APP_FEATURES[activeFeature].color} mb-6`}>
                      <span className="text-2xl text-white font-bold">
                        {activeFeature + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                      {APP_FEATURES[activeFeature].title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      {APP_FEATURES[activeFeature].description}
                    </p>
                    <div className="space-y-3 text-left">
                      {APP_FEATURES[activeFeature].features.map((featureItem, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${APP_FEATURES[activeFeature].color.split(' ')[1]} to-${APP_FEATURES[activeFeature].color.split(' ')[3]}`}></div>
                          <span>{featureItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side Image */}
                <div className="w-1/2 flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-[9/19.5]">
                    <Image
                      src={APP_FEATURES[activeFeature].image}
                      alt={`${APP_FEATURES[activeFeature].title} - CASH OUT app screen`}
                      layout="fill"
                      objectFit="contain"
                      className="w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
          {/* Spacers for scroll trigger */}
          {APP_FEATURES.map(feature => (
            <div key={`${feature.id}-spacer`} className="h-screen"></div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden py-12">
          <Container>
            {APP_FEATURES.map((feature, index) => (
              <div key={feature.id} className="min-h-screen flex flex-col justify-center py-12">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                    <span className="text-2xl text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl mx-auto">{feature.description}</p>
                </div>
                <div className="relative my-8 w-full max-w-xs mx-auto aspect-[9/19.5]">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} - CASH OUT app screen`}
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                </div>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  {feature.features.map((featureItem, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color.split(' ')[1]} to-${feature.color.split(' ')[3]}`}></div>
                      <span>{featureItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </div>
      </div>

      {/* Scroll Indicator for Desktop */}
      <div className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 z-30">
        <div className="flex flex-col gap-4">
          {APP_FEATURES.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => {
                const yOffset = window.innerHeight * index;
                window.scrollTo({ top: containerRef.current!.offsetTop + yOffset, behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeFeature 
                  ? 'bg-[var(--color-primary)] scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { AppShowcase }
