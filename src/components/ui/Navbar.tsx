'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Menu, X, Download, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { 
  buttonVariants
} from '@/lib/animations'
import { focusVisible, touchTarget } from '@/lib/accessibility'

interface NavbarProps {
  className?: string
}

const navigationItems = [
  {
    name: 'Features',
    href: '#features',
    description: 'Discover what makes CASH OUT effective'
  },
  {
    name: 'Product',
    href: '#progress',
    description: 'See how our app helps you recover'
  },
  {
    name: 'Blog',
    href: '/blog',
    description: 'Recovery tips and success stories',
    external: true
  }
]

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    
    // Prevent body scroll when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  // Handle smooth scroll to sections
  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      // For external links, just navigate normally
      return
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        closeMobileMenu()
      }
    }
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-[var(--color-black)]/95 backdrop-blur-md border-b border-[var(--color-gray-800)]' 
          : 'bg-transparent',
        className
      )}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="banner"
    >
      <Container>
        <nav 
          className="flex items-center justify-between py-4 lg:py-6"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className={cn(
                'text-2xl font-bold text-white hover:text-[var(--color-primary)] transition-colors duration-200',
                focusVisible,
                'rounded-md px-2 py-1'
              )}
              aria-label="CASH OUT - Go to homepage"
            >
              CASH OUT
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (!item.external) {
                    e.preventDefault()
                    handleNavClick(item.href, item.external)
                  }
                }}
                className={cn(
                  'text-gray-300 hover:text-white transition-colors duration-200 font-medium',
                  focusVisible,
                  'rounded-md px-3 py-2'
                )}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                {item.name}
                {item.external && (
                  <span className="ml-1 text-xs opacity-60" aria-hidden="true">↗</span>
                )}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="primary"
                size="md"
                className="group"
                onClick={() => {
                  // Scroll to app store buttons or trigger download modal
                  const appStoreSection = document.querySelector('[data-app-store-buttons]')
                  if (appStoreSection) {
                    appStoreSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                aria-label="Download CASH OUT app"
              >
                <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Download
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={cn(
              'lg:hidden text-white hover:text-[var(--color-primary)] transition-colors duration-200',
              focusVisible,
              touchTarget.recommended,
              'rounded-md p-2'
            )}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-[var(--color-gray-800)]"
            >
              <div className="py-6 space-y-4">
                {/* Mobile Navigation Links */}
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (!item.external) {
                          e.preventDefault()
                          handleNavClick(item.href, item.external)
                        } else {
                          closeMobileMenu()
                        }
                      }}
                      className={cn(
                        'block py-3 px-4 text-gray-300 hover:text-white hover:bg-[var(--color-gray-800)]/50 transition-all duration-200 rounded-lg',
                        focusVisible
                      )}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium flex items-center">
                            {item.name}
                            {item.external && (
                              <span className="ml-2 text-xs opacity-60" aria-hidden="true">↗</span>
                            )}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-500 rotate-[-90deg]" />
                      </div>
                    </a>
                  </motion.div>
                ))}

                {/* Mobile Download Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigationItems.length * 0.1 }}
                  className="pt-4 border-t border-[var(--color-gray-800)]"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full group"
                    onClick={() => {
                      const appStoreSection = document.querySelector('[data-app-store-buttons]')
                      if (appStoreSection) {
                        appStoreSection.scrollIntoView({ behavior: 'smooth' })
                        closeMobileMenu()
                      }
                    }}
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Download CASH OUT
                  </Button>
                </motion.div>

                {/* Mobile App Store Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (navigationItems.length + 1) * 0.1 }}
                  className="text-center pt-2"
                >
                  <p className="text-sm text-gray-400">
                    Available on iOS and Android
                  </p>
                  <div className="flex items-center justify-center space-x-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      Free Download
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                      4.8★ Rating
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  )
}

export { Navbar, type NavbarProps }