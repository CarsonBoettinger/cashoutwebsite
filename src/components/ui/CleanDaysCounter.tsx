'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { AnimatedCounter } from './AnimatedCounter'
import { Calendar, Target, TrendingUp, Award } from 'lucide-react'

interface CleanDaysCounterProps {
  currentStreak: number
  totalCleanDays: number
  longestStreak: number
  goal?: number
  variant?: 'default' | 'compact' | 'detailed'
  className?: string
}

const CleanDaysCounter: React.FC<CleanDaysCounterProps> = ({
  currentStreak,
  totalCleanDays,
  longestStreak,
  goal = 365,
  variant = 'default',
  className
}) => {
  const progressToGoal = Math.min((currentStreak / goal) * 100, 100)
  const isNewRecord = currentStreak >= longestStreak

  if (variant === 'compact') {
    return (
      <motion.div
        className={cn(
          'flex items-center gap-4 p-4 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-primary-light)]/10 rounded-xl border border-[var(--color-primary)]/20',
          className
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <div>
          <AnimatedCounter 
            value={currentStreak} 
            size="lg" 
            color="primary" 
            suffix=" days clean"
          />
          <p className="text-xs text-gray-400 mt-1">
            Total: {totalCleanDays.toLocaleString()} days
          </p>
        </div>
      </motion.div>
    )
  }

  if (variant === 'detailed') {
    return (
      <motion.div
        className={cn(
          'p-6 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl border border-[var(--color-gray-700)]',
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Clean Days Progress
            </h3>
          </div>
          {isNewRecord && (
            <motion.div
              className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-full border border-yellow-400/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Award className="w-3 h-3 text-yellow-400" />
              <span className="text-xs font-medium text-yellow-400">
                New Record!
              </span>
            </motion.div>
          )}
        </div>

        {/* Main Counter */}
        <div className="text-center mb-6">
          <div className="mb-2">
            <AnimatedCounter 
              value={currentStreak} 
              size="xl" 
              color="primary" 
              duration={2.5}
            />
          </div>
          <p className="text-lg font-semibold text-white mb-1">
            Days Clean
          </p>
          <p className="text-sm text-gray-400">
            {progressToGoal.toFixed(1)}% towards your {goal}-day goal
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-400">
              Progress to Goal
            </span>
            <span className="text-xs font-bold text-[var(--color-primary)]">
              {Math.round(progressToGoal)}%
            </span>
          </div>
          <div className="w-full h-2 bg-[var(--color-gray-800)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressToGoal}%` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-[var(--color-gray-800)]/50 rounded-lg">
            <div className="flex items-center justify-center gap-1 mb-2">
              <TrendingUp className="w-4 h-4 text-[var(--color-blue)]" />
              <span className="text-xs font-medium text-gray-300">
                Total Clean
              </span>
            </div>
            <AnimatedCounter 
              value={totalCleanDays} 
              size="md" 
              color="white" 
              duration={2}
              delay={0.8}
            />
            <p className="text-xs text-gray-400 mt-1">days</p>
          </div>
          
          <div className="text-center p-3 bg-[var(--color-gray-800)]/50 rounded-lg">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-medium text-gray-300">
                Best Streak
              </span>
            </div>
            <AnimatedCounter 
              value={longestStreak} 
              size="md" 
              color="white" 
              duration={2}
              delay={1}
            />
            <p className="text-xs text-gray-400 mt-1">days</p>
          </div>
        </div>
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      className={cn(
        'p-6 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl border border-[var(--color-gray-700)]',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full">
            <Calendar className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="mb-2">
          <AnimatedCounter 
            value={currentStreak} 
            size="xl" 
            color="primary" 
            duration={2}
          />
        </div>
        
        <p className="text-lg font-semibold text-white mb-4">
          Days Clean
        </p>
        
        <div className="flex justify-center gap-6 text-sm">
          <div className="text-center">
            <p className="text-gray-400">Total</p>
            <AnimatedCounter 
              value={totalCleanDays} 
              size="sm" 
              color="white" 
              duration={1.5}
              delay={0.5}
            />
          </div>
          <div className="text-center">
            <p className="text-gray-400">Best</p>
            <AnimatedCounter 
              value={longestStreak} 
              size="sm" 
              color="white" 
              duration={1.5}
              delay={0.7}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export { CleanDaysCounter, type CleanDaysCounterProps }