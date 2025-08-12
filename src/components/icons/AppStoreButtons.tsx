'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface AppStoreButtonProps {
  platform: 'ios' | 'android'
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ 
  platform, 
  variant = 'primary',
  className,
  href = '#'
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2'
  
  const variants = {
    primary: 'bg-[var(--color-gray-900)] hover:bg-[var(--color-gray-800)] border border-[var(--color-gray-700)] hover:border-[var(--color-primary)]/50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-transparent border-2 border-[var(--color-gray-700)] hover:border-[var(--color-primary)] hover:bg-[var(--color-gray-900)]'
  }

  const platformContent = {
    ios: {
      text: 'Download on the',
      store: 'App Store',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )
    },
    android: {
      text: 'Get it on',
      store: 'Google Play',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
        </svg>
      )
    }
  }

  const content = platformContent[platform]

  return (
    <a
      href={href}
      className={cn(
        baseStyles,
        variants[variant],
        'px-4 py-3 sm:px-6 min-w-[140px] sm:min-w-[160px] min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-black)]',
        className
      )}
      role="button"
      aria-label={`Download CASH OUT app on ${content.store}`}
    >
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="text-white flex-shrink-0" aria-hidden="true">
          <div className="w-6 h-6 sm:w-8 sm:h-8">
            {content.icon}
          </div>
        </div>
        <div className="text-left min-w-0">
          <div className="text-xs text-gray-300 leading-tight">
            {content.text}
          </div>
          <div className="text-sm font-semibold text-white leading-tight">
            {content.store}
          </div>
        </div>
      </div>
    </a>
  )
}

interface AppStoreButtonsProps {
  variant?: 'primary' | 'secondary'
  className?: string
  iosHref?: string
  androidHref?: string
  layout?: 'horizontal' | 'vertical'
}

const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  variant = 'primary',
  className,
  iosHref = '#',
  androidHref = '#',
  layout = 'horizontal'
}) => {
  const layoutStyles = {
    horizontal: 'flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full max-w-sm sm:max-w-none mx-auto',
    vertical: 'flex flex-col gap-3 sm:gap-4 items-center w-full max-w-sm mx-auto'
  }

  return (
    <div 
      className={cn(layoutStyles[layout], className)}
      role="group"
      aria-label="Download CASH OUT app"
    >
      <AppStoreButton 
        platform="ios" 
        variant={variant}
        href={iosHref}
      />
      <AppStoreButton 
        platform="android" 
        variant={variant}
        href={androidHref}
      />
    </div>
  )
}

export { AppStoreButton, AppStoreButtons, type AppStoreButtonProps, type AppStoreButtonsProps }