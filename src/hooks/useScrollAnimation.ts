/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * Provides fine-grained control over when animations trigger
 */

import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '@/lib/accessibility'

interface UseScrollAnimationOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

interface ScrollAnimationState {
  isVisible: boolean
  hasTriggered: boolean
  entry: IntersectionObserverEntry | null
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.3,
    rootMargin = '-100px',
    triggerOnce = true,
    delay = 0
  } = options

  const elementRef = useRef<HTMLElement>(null)
  const [state, setState] = useState<ScrollAnimationState>({
    isVisible: false,
    hasTriggered: false,
    entry: null
  })

  const reducedMotion = prefersReducedMotion()

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // If reduced motion is preferred, immediately show the element
    if (reducedMotion) {
      setState({
        isVisible: true,
        hasTriggered: true,
        entry: null
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        const isIntersecting = entry.isIntersecting

        if (isIntersecting && (!state.hasTriggered || !triggerOnce)) {
          if (delay > 0) {
            setTimeout(() => {
              setState(() => ({
                isVisible: true,
                hasTriggered: true,
                entry
              }))
            }, delay)
          } else {
            setState(() => ({
              isVisible: true,
              hasTriggered: true,
              entry
            }))
          }
        } else if (!triggerOnce && !isIntersecting) {
          setState(prev => ({
            isVisible: false,
            hasTriggered: prev.hasTriggered,
            entry
          }))
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, delay, reducedMotion, state.hasTriggered])

  return {
    ref: elementRef,
    isVisible: state.isVisible,
    hasTriggered: state.hasTriggered,
    entry: state.entry
  }
}

// Hook for staggered animations of multiple elements
export function useStaggeredScrollAnimation(
  count: number,
  options: UseScrollAnimationOptions & { staggerDelay?: number } = {}
) {
  const {
    staggerDelay = 100,
    ...scrollOptions
  } = options

  const containerRef = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const reducedMotion = prefersReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // If reduced motion is preferred, show all items immediately
    if (reducedMotion) {
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animations
            Array.from({ length: count }, (_, i) => i).forEach((index) => {
              setTimeout(() => {
                setVisibleItems(prev => new Set([...prev, index]))
              }, index * staggerDelay)
            })
          }
        })
      },
      {
        threshold: scrollOptions.threshold || 0.3,
        rootMargin: scrollOptions.rootMargin || '-100px'
      }
    )

    observer.observe(container)

    return () => {
      observer.unobserve(container)
    }
  }, [count, staggerDelay, scrollOptions.threshold, scrollOptions.rootMargin, reducedMotion])

  return {
    ref: containerRef,
    visibleItems,
    isItemVisible: (index: number) => visibleItems.has(index)
  }
}

// Hook for scroll progress tracking
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress() // Initial calculation

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return scrollProgress
}

// Hook for element visibility with callback
export function useInView(
  callback: (isVisible: boolean, entry: IntersectionObserverEntry) => void,
  options: UseScrollAnimationOptions = {}
) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        callback(entry.isIntersecting, entry)
      },
      {
        threshold: options.threshold || 0.3,
        rootMargin: options.rootMargin || '-100px'
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [callback, options.threshold, options.rootMargin])

  return elementRef
}

// Hook for parallax scrolling effect
export function useParallax(speed = 0.5) {
  const elementRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)
  const reducedMotion = prefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const handleScroll = () => {
      const element = elementRef.current
      if (!element) return

      const scrolled = window.scrollY
      const rate = scrolled * speed
      setOffset(rate)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed, reducedMotion])

  return {
    ref: elementRef,
    offset: reducedMotion ? 0 : offset
  }
}

const scrollAnimationHooks = {
  useScrollAnimation,
  useStaggeredScrollAnimation,
  useScrollProgress,
  useInView,
  useParallax
}

export default scrollAnimationHooks