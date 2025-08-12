'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-black)] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation'
    
    const variants = {
      primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
      secondary: 'bg-[var(--color-gray-800)] text-white hover:bg-[var(--color-gray-700)] shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
      outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-white shadow-sm hover:shadow-md'
    }
    
    const sizes = {
      sm: 'h-10 px-4 text-sm min-w-[44px]', // Minimum 44px touch target
      md: 'h-12 px-6 text-base min-w-[48px]', // Recommended 48px touch target
      lg: 'h-14 px-8 text-lg min-w-[48px]'
    }

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )

    if (href && !asChild) {
      return (
        <a
          href={href}
          className={buttonClasses}
          role="button"
          tabIndex={0}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, type ButtonProps }