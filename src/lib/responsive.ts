/**
 * Responsive design utilities and breakpoint testing helpers
 */

// Breakpoint definitions matching our CSS variables
export const BREAKPOINTS = {
  xs: 320,   // Extra small devices (phones)
  sm: 640,   // Small tablets
  md: 768,   // Tablets
  lg: 1024,  // Small desktops
  xl: 1280,  // Large desktops
  '2xl': 1536 // Extra large screens
} as const

export type Breakpoint = keyof typeof BREAKPOINTS

// Touch target minimum sizes (WCAG AA compliance)
export const TOUCH_TARGETS = {
  minimum: 44,     // 44px minimum for touch targets
  recommended: 48  // 48px recommended for better UX
} as const

// Responsive spacing utilities
export const RESPONSIVE_SPACING = {
  section: {
    mobile: 'py-12 px-4',
    tablet: 'py-16 px-6', 
    desktop: 'py-20 px-8'
  },
  container: {
    mobile: 'px-4',
    tablet: 'px-6',
    desktop: 'px-8'
  },
  gap: {
    mobile: 'gap-4',
    tablet: 'gap-6',
    desktop: 'gap-8'
  }
} as const

// Typography scale for responsive design
export const RESPONSIVE_TYPOGRAPHY = {
  hero: {
    mobile: 'text-3xl sm:text-4xl',
    tablet: 'md:text-5xl',
    desktop: 'lg:text-6xl xl:text-7xl'
  },
  heading: {
    mobile: 'text-2xl sm:text-3xl',
    tablet: 'md:text-4xl',
    desktop: 'lg:text-5xl'
  },
  subheading: {
    mobile: 'text-xl sm:text-2xl',
    tablet: 'md:text-3xl',
    desktop: 'lg:text-4xl'
  },
  body: {
    mobile: 'text-base',
    tablet: 'md:text-lg',
    desktop: 'lg:text-xl'
  },
  small: {
    mobile: 'text-sm',
    tablet: 'md:text-base',
    desktop: 'lg:text-lg'
  }
} as const

// Grid system for responsive layouts
export const RESPONSIVE_GRID = {
  features: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  testimonials: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  twoColumn: 'grid-cols-1 lg:grid-cols-2',
  fourColumn: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
} as const

// Utility function to generate responsive classes
export function responsiveClass(
  mobile: string,
  tablet?: string,
  desktop?: string
): string {
  const classes = [mobile]
  if (tablet) classes.push(`md:${tablet}`)
  if (desktop) classes.push(`lg:${desktop}`)
  return classes.join(' ')
}

// Utility function to check if current viewport matches breakpoint
export function matchesBreakpoint(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= BREAKPOINTS[breakpoint]
}

// Utility function to get current breakpoint
export function getCurrentBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'lg'
  
  const width = window.innerWidth
  
  if (width >= BREAKPOINTS['2xl']) return '2xl'
  if (width >= BREAKPOINTS.xl) return 'xl'
  if (width >= BREAKPOINTS.lg) return 'lg'
  if (width >= BREAKPOINTS.md) return 'md'
  if (width >= BREAKPOINTS.sm) return 'sm'
  return 'xs'
}

// Hook for responsive behavior (client-side only)
export function useResponsive() {
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint>(() => {
    if (typeof window === 'undefined') {
      return 'lg'
    }
    return getCurrentBreakpoint()
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (typeof window === 'undefined') {
    return {
      breakpoint: 'lg' as Breakpoint,
      isMobile: false,
      isTablet: false,
      isDesktop: true
    }
  }

  return {
    breakpoint,
    isMobile: breakpoint === 'xs' || breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl'
  }
}

// Import React for the hook
import React from 'react'