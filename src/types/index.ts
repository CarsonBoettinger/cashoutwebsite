// Button Component Props
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
}

// Feature Card Props
export interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number // For staggered animations
}

// Testimonial Props
export interface TestimonialProps {
  quote: string
  author: string
  timeline: string
  avatar?: string
}

// App Store Button Props
export interface AppStoreButtonProps {
  platform: 'ios' | 'android'
  variant: 'primary' | 'secondary'
}

// Static Content Structure
export interface Feature {
  id: string
  icon: string
  title: string
  description: string
  order: number
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  timeline: string
  avatar?: string
  featured: boolean
}

export interface ProgressStat {
  label: string
  value: string | number
  suffix?: string
  animated: boolean
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  canonicalUrl: string
}