/**
 * Animation utilities and configurations for Framer Motion
 * Includes scroll-triggered animations and accessibility considerations
 */

import { Variants } from 'framer-motion'
import { prefersReducedMotion } from './accessibility'

// Animation durations based on design system
export const ANIMATION_DURATIONS = {
  micro: 0.2,
  standard: 0.3,
  complex: 0.5,
  entrance: 0.6,
  section: 0.8
} as const

// Animation easing curves
export const ANIMATION_EASINGS = {
  standard: [0.4, 0, 0.2, 1],
  decelerate: [0, 0, 0.2, 1],
  accelerate: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
  bounce: [0.68, -0.55, 0.265, 1.55]
} as const

// Stagger delays for sequential animations
export const STAGGER_DELAYS = {
  fast: 0.05,
  standard: 0.1,
  slow: 0.15,
  feature: 0.1,
  testimonial: 0.2
} as const

// Common animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      ease: ANIMATION_EASINGS.bounce
    }
  }
}

export const slideInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.section,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

// Container variants for staggered children animations
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAYS.standard,
      delayChildren: 0.1
    }
  }
}

export const staggerContainerFast: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAYS.fast,
      delayChildren: 0.05
    }
  }
}

export const staggerContainerSlow: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAYS.slow,
      delayChildren: 0.2
    }
  }
}

// Feature-specific variants
export const featureCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

export const testimonialCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: ANIMATION_DURATIONS.section,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

// Hero section specific animations
export const heroTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.section,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

export const heroSubtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      delay: 0.2,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

export const heroButtonsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      delay: 0.4,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

// Progress section animations
export const progressMockupVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.section,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

export const progressContentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.section,
      delay: 0.2,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

// CTA section animations
export const ctaBannerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.section,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

// Footer animations
export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

// Viewport configuration for scroll-triggered animations
export const defaultViewport = {
  once: true,
  margin: "-100px",
  amount: 0.3
} as const

export const earlyViewport = {
  once: true,
  margin: "-50px",
  amount: 0.2
} as const

export const lateViewport = {
  once: true,
  margin: "-150px",
  amount: 0.4
} as const

// Utility function to get animation props with reduced motion support
export function getAnimationProps(
  variants: Variants,
  viewport = defaultViewport,
  customDelay = 0
) {
  const reducedMotion = prefersReducedMotion()
  
  if (reducedMotion) {
    return {
      initial: false,
      animate: "visible",
      variants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotateX: 0
        }
      }
    }
  }

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport,
    variants,
    transition: {
      delay: customDelay
    }
  }
}

// Utility function for staggered container animations
export function getStaggerContainerProps(
  staggerDelay: number = STAGGER_DELAYS.standard,
  viewport = defaultViewport
) {
  const reducedMotion = prefersReducedMotion()
  
  if (reducedMotion) {
    return {
      initial: false,
      animate: "visible",
      variants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1
        }
      }
    }
  }

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport,
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.1
        }
      }
    }
  }
}

// Hover animation variants
export const hoverLift = {
  scale: 1.02,
  y: -4,
  transition: {
    duration: ANIMATION_DURATIONS.standard,
    ease: ANIMATION_EASINGS.decelerate
  }
}

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: ANIMATION_DURATIONS.standard,
    ease: ANIMATION_EASINGS.decelerate
  }
}

export const hoverGlow = {
  boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
  transition: {
    duration: ANIMATION_DURATIONS.standard,
    ease: ANIMATION_EASINGS.decelerate
  }
}

// Button animation variants
export const buttonVariants: Variants = {
  idle: {
    scale: 1,
    boxShadow: "0 4px 14px 0 rgba(16, 185, 129, 0.2)"
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 6px 20px 0 rgba(16, 185, 129, 0.4)",
    transition: {
      duration: ANIMATION_DURATIONS.standard,
      ease: ANIMATION_EASINGS.decelerate
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: ANIMATION_DURATIONS.micro,
      ease: ANIMATION_EASINGS.sharp
    }
  }
}

// Loading animation variants
export const loadingSpinner: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: ANIMATION_EASINGS.decelerate
    }
  }
}

// Export all animation utilities
const animationUtils = {
  ANIMATION_DURATIONS,
  ANIMATION_EASINGS,
  STAGGER_DELAYS,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInUp,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  featureCardVariants,
  testimonialCardVariants,
  heroTitleVariants,
  heroSubtitleVariants,
  heroButtonsVariants,
  progressMockupVariants,
  progressContentVariants,
  ctaBannerVariants,
  footerVariants,
  defaultViewport,
  earlyViewport,
  lateViewport,
  getAnimationProps,
  getStaggerContainerProps,
  hoverLift,
  hoverScale,
  hoverGlow,
  buttonVariants,
  loadingSpinner,
  pulseVariants
}

export default animationUtils