'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AppStoreButtons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { 
  footerVariants,
  fadeInUp,
  getAnimationProps,
  getStaggerContainerProps,
  defaultViewport,
  STAGGER_DELAYS
} from '@/lib/animations'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer 
      className={cn(
        'bg-[var(--color-gray-900)] border-t border-[var(--color-gray-800)]',
        className
      )}
      role="contentinfo"
      aria-label="Site footer"
    >
      <Container className="py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          {...getStaggerContainerProps(STAGGER_DELAYS.standard, defaultViewport)}
        >
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            {...getAnimationProps(footerVariants, defaultViewport)}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                CASH OUT
              </h3>
              <p className="text-[var(--color-gray-100)] text-base leading-relaxed max-w-md">
                Break free from gambling addiction and rebuild your life. Join thousands who have successfully quit gambling with our science-based recovery program.
              </p>
            </div>
            
            {/* App Store Buttons */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                Download the App
              </h4>
              <AppStoreButtons 
                variant="secondary"
                layout="horizontal"
                className="justify-start"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            {...getAnimationProps(footerVariants, defaultViewport, 0.1)}
          >
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">
              Quick Links
            </h4>
            <nav className="space-y-4" aria-label="Quick navigation links">
              <a 
                href="#features" 
                className="block text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded"
              >
                Features
              </a>
              <a 
                href="#progress" 
                className="block text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded"
              >
                Progress Tracking
              </a>
              <a 
                href="#testimonials" 
                className="block text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded"
              >
                Success Stories
              </a>
              <a 
                href="#support" 
                className="block text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded"
              >
                Support
              </a>
            </nav>
          </motion.div>

          {/* Legal & Support */}
          <motion.div
            {...getAnimationProps(footerVariants, defaultViewport, 0.2)}
          >
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">
              Legal & Support
            </h4>
            <nav className="space-y-4" aria-label="Legal and support links">
              <a 
                href="/privacy" 
                className="block text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="block text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded"
              >
                Terms of Service
              </a>
              <a 
                href="/contact" 
                className="block text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded"
              >
                Contact Us
              </a>
              <a 
                href="/help" 
                className="block text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded"
              >
                Help Center
              </a>
            </nav>
          </motion.div>
        </motion.div>

        {/* Social Media & Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-[var(--color-gray-800)]"
          {...getAnimationProps(fadeInUp, defaultViewport, 0.3)}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-[var(--color-gray-100)] font-medium">
                Follow Us:
              </span>
              <div className="flex space-x-4" role="list" aria-label="Social media links">
                {/* Facebook */}
                <a
                  href="#"
                  className="text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow CASH OUT on Facebook"
                  role="listitem"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="#"
                  className="text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow CASH OUT on Twitter"
                  role="listitem"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow CASH OUT on Instagram"
                  role="listitem"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.404c-.49 0-.928-.422-.928-.928 0-.49.438-.928.928-.928.49 0 .928.438.928.928 0 .506-.438.928-.928.928zm-4.262 1.364c-1.297 0-2.346 1.049-2.346 2.346s1.049 2.346 2.346 2.346 2.346-1.049 2.346-2.346-1.049-2.346-2.346-2.346z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="text-[var(--color-gray-100)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-gray-900)] rounded p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow CASH OUT on LinkedIn"
                  role="listitem"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-[var(--color-gray-100)] text-center md:text-right">
              <p>
                © {new Date().getFullYear()} CASH OUT. All rights reserved.
              </p>
              <p className="mt-1">
                Helping people break free from gambling addiction.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}

export { Footer, type FooterProps }