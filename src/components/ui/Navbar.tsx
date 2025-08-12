'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Menu, X, Download } from 'lucide-react'
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
    href: '#features'
  },
  {
    name: 'Product',
    href: '#progress'
  },
  {
    name: 'Blog',
    href: '/blog',
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
      document.body.style.paddingRight = '0px' // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = 'unset'
    }
  }

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = 'unset'
  }

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

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
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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
              className="lg:hidden overflow-hidden border-t border-[var(--color-gray-800)] bg-[var(--color-black)]/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-2">
                {/* Mobile Navigation Links */}
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
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
                      'block py-3 px-4 text-gray-300 hover:text-white hover:bg-[var(--color-gray-800)]/50 transition-all duration-200',
                      focusVisible
                    )}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        {item.name}
                        {item.external && (
                          <span className="ml-2 text-xs opacity-60" aria-hidden="true">↗</span>
                        )}
                      </span>
                    </div>
                  </a>
                ))}

                {/* Mobile Download Button */}
                <div className="pt-4 border-t border-[var(--color-gray-800)] px-4">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      const appStoreSection = document.querySelector('[data-app-store-buttons]')
                      if (appStoreSection) {
                        appStoreSection.scrollIntoView({ behavior: 'smooth' })
                        closeMobileMenu()
                      }
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  )
}

export { Navbar, type NavbarProps }