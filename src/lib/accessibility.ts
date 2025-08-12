/**
 * Accessibility utilities and WCAG compliance helpers
 */

// WCAG AA color contrast ratios
export const CONTRAST_RATIOS = {
  AA_NORMAL: 4.5,     // WCAG AA for normal text
  AA_LARGE: 3,        // WCAG AA for large text (18pt+ or 14pt+ bold)
  AAA_NORMAL: 7,      // WCAG AAA for normal text
  AAA_LARGE: 4.5      // WCAG AAA for large text
} as const

// Screen reader text utility
export const srOnly = 'sr-only absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0'

// Focus visible styles for keyboard navigation
export const focusVisible = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-black)]'

// Skip link styles
export const skipLink = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-md focus:shadow-lg'

// ARIA live region classes
export const liveRegion = {
  polite: 'sr-only',
  assertive: 'sr-only'
} as const

// Touch target minimum sizes (44px minimum, 48px recommended)
export const touchTarget = {
  minimum: 'min-w-[44px] min-h-[44px]',
  recommended: 'min-w-[48px] min-h-[48px]'
} as const

// Semantic HTML helpers
export const semanticRoles = {
  banner: 'banner',
  navigation: 'navigation', 
  main: 'main',
  complementary: 'complementary',
  contentinfo: 'contentinfo',
  search: 'search',
  form: 'form',
  region: 'region'
} as const

// ARIA attributes helpers
export interface AriaProps {
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean
  'aria-hidden'?: boolean
  'aria-live'?: 'polite' | 'assertive' | 'off'
  'aria-atomic'?: boolean
  'aria-relevant'?: string
  'aria-busy'?: boolean
  'aria-disabled'?: boolean
  'aria-pressed'?: boolean
  'aria-selected'?: boolean
  'aria-checked'?: boolean | 'mixed'
  'aria-current'?: boolean | 'page' | 'step' | 'location' | 'date' | 'time'
  'aria-controls'?: string
  'aria-owns'?: string
  'aria-activedescendant'?: string
  'aria-setsize'?: number
  'aria-posinset'?: number
  'aria-level'?: number
  'aria-valuemin'?: number
  'aria-valuemax'?: number
  'aria-valuenow'?: number
  'aria-valuetext'?: string
  role?: string
}

// Color contrast validation (simplified)
export function validateContrast(_foreground: string, _background: string): {
  ratio: number
  passesAA: boolean
  passesAAA: boolean
} {
  // This is a simplified implementation
  // In a real app, you'd use a proper color contrast library
  return {
    ratio: 4.5, // Placeholder
    passesAA: true,
    passesAAA: false
  }
}

// Generate unique IDs for ARIA relationships
let idCounter = 0
export function generateId(prefix = 'id'): string {
  return `${prefix}-${++idCounter}`
}

// Keyboard navigation helpers
export const keyboardNavigation = {
  // Common key codes
  keys: {
    ENTER: 'Enter',
    SPACE: ' ',
    ESCAPE: 'Escape',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    HOME: 'Home',
    END: 'End',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    TAB: 'Tab'
  },
  
  // Handle keyboard activation (Enter/Space)
  handleActivation: (event: KeyboardEvent, callback: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      callback()
    }
  },
  
  // Trap focus within an element
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }
    
    container.addEventListener('keydown', handleTabKey)
    return () => container.removeEventListener('keydown', handleTabKey)
  }
}

// Reduced motion detection
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// High contrast detection
export function prefersHighContrast(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-contrast: high)').matches
}

// Screen reader detection (basic)
export function isScreenReaderActive(): boolean {
  if (typeof window === 'undefined') return false
  // This is a basic check - more sophisticated detection would be needed for production
  return window.navigator.userAgent.includes('NVDA') || 
         window.navigator.userAgent.includes('JAWS') ||
         window.speechSynthesis?.speaking === true
}

// Announce to screen readers
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  if (typeof document === 'undefined') return
  
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = srOnly
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Focus management
export const focusManagement = {
  // Set focus to element
  setFocus: (element: HTMLElement | null, options?: FocusOptions) => {
    if (element) {
      element.focus(options)
    }
  },
  
  // Get currently focused element
  getCurrentFocus: (): Element | null => {
    return document.activeElement
  },
  
  // Check if element is focusable
  isFocusable: (element: HTMLElement): boolean => {
    const focusableSelectors = [
      'button:not([disabled])',
      '[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ]
    
    return focusableSelectors.some(selector => element.matches(selector))
  },
  
  // Get all focusable elements within container
  getFocusableElements: (container: HTMLElement): HTMLElement[] => {
    const selector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    return Array.from(container.querySelectorAll(selector))
  }
}

// Alt text helpers
export const altTextHelpers = {
  // Generate descriptive alt text for decorative images
  decorative: '',
  
  // Generate alt text for informative images
  informative: (description: string) => description,
  
  // Generate alt text for functional images (buttons, links)
  functional: (action: string) => action,
  
  // Generate alt text for complex images (charts, graphs)
  complex: (summary: string, detailsId?: string) => {
    return detailsId ? `${summary}. Full details in text following image.` : summary
  }
}

const accessibilityUtils = {
  CONTRAST_RATIOS,
  srOnly,
  focusVisible,
  skipLink,
  liveRegion,
  touchTarget,
  semanticRoles,
  validateContrast,
  generateId,
  keyboardNavigation,
  prefersReducedMotion,
  prefersHighContrast,
  isScreenReaderActive,
  announceToScreenReader,
  focusManagement,
  altTextHelpers
}

export default accessibilityUtils