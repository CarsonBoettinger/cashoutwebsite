'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { Container } from '@/components/ui/Container'
import { 
  fadeInUp,
  getAnimationProps,
  getStaggerContainerProps,
  defaultViewport,
  STAGGER_DELAYS
} from '@/lib/animations'

// Testimonial data based on requirements
const testimonials = [
  {
    id: "testimonial-1",
    quote: "CASH OUT helped me break a 10-year gambling addiction. The daily check-ins and community support kept me accountable when I needed it most.",
    author: "Sarah M.",
    timeline: "6 months clean"
  },
  {
    id: "testimonial-2", 
    quote: "I lost everything to gambling - my savings, my relationships, my self-respect. CASH OUT gave me the tools to rebuild my life step by step. The streak tracking motivated me every single day.",
    author: "Michael R.",
    timeline: "1 year clean"
  },
  {
    id: "testimonial-3",
    quote: "The relapse recovery tools saved me when I hit rock bottom again. Instead of giving up, CASH OUT helped me get back on track. I'm stronger now than I've ever been.",
    author: "Jennifer L.",
    timeline: "8 months clean"
  }
]

const Testimonials: React.FC = () => {
  return (
    <section 
      className="py-20 bg-[var(--color-black)] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-transparent to-[var(--color-blue)]" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          {...getAnimationProps(fadeInUp, defaultViewport)}
          className="text-center mb-16"
        >
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Stories of{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              Recovery
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of people who have successfully quit gambling and reclaimed their lives with CASH OUT
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="User testimonials"
          {...getStaggerContainerProps(STAGGER_DELAYS.testimonial, defaultViewport)}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              timeline={testimonial.timeline}
              delay={index * STAGGER_DELAYS.testimonial}
              className="h-full"
              role="listitem"
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          {...getAnimationProps(fadeInUp, defaultViewport, 0.8)}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to write your own success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-sm text-[var(--color-primary)] font-medium">
              ⭐ 4.8/5 rating from 10,000+ users
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full" />
            <div className="text-sm text-gray-400">
              Join the community today
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export { Testimonials }