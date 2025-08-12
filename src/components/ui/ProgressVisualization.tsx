'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { StreakDisplay } from './StreakDisplay'
import { MoodTracker } from './MoodTracker'
import { CleanDaysCounter } from './CleanDaysCounter'
import { ProgressBar } from './ProgressBar'
import { AnimatedCounter } from './AnimatedCounter'
import { 
  TrendingUp, 
  Target, 
  Brain, 
  Heart,
  Star
} from 'lucide-react'

interface ProgressVisualizationProps {
  variant?: 'mockup' | 'interactive'
  className?: string
}

// Mock data for the visualization
const mockData = {
  currentStreak: 47,
  totalCleanDays: 312,
  longestStreak: 89,
  streakHours: 14,
  streakMinutes: 23,
  goal: 365,
  weeklyProgress: 85,
  monthlyProgress: 72,
  recoveryScore: 78,
  milestones: [
    { days: 7, achieved: true, label: '1 Week' },
    { days: 30, achieved: true, label: '1 Month' },
    { days: 90, achieved: false, label: '3 Months' },
    { days: 365, achieved: false, label: '1 Year' }
  ]
}

const ProgressVisualization: React.FC<ProgressVisualizationProps> = ({
  variant = 'mockup',
  className
}) => {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Current Streak - Hero Display */}
        <div className="lg:col-span-1">
          <StreakDisplay
            days={mockData.currentStreak}
            hours={mockData.streakHours}
            minutes={mockData.streakMinutes}
            variant="hero"
          />
        </div>

        {/* Clean Days Counter */}
        <div className="lg:col-span-1">
          <CleanDaysCounter
            currentStreak={mockData.currentStreak}
            totalCleanDays={mockData.totalCleanDays}
            longestStreak={mockData.longestStreak}
            goal={mockData.goal}
            variant="detailed"
          />
        </div>

        {/* Mood Tracker */}
        <div className="lg:col-span-1">
          <MoodTracker interactive={variant === 'interactive'} />
        </div>
      </div>

      {/* Progress Metrics */}
      <motion.div
        className="p-6 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl border border-[var(--color-gray-700)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-blue-light)] rounded-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">
            Recovery Progress
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Weekly Progress */}
          <div>
            <ProgressBar
              value={mockData.weeklyProgress}
              label="This Week"
              color="primary"
              size="md"
              animated={true}
            />
          </div>

          {/* Monthly Progress */}
          <div>
            <ProgressBar
              value={mockData.monthlyProgress}
              label="This Month"
              color="blue"
              size="md"
              animated={true}
            />
          </div>

          {/* Recovery Score */}
          <div>
            <ProgressBar
              value={mockData.recoveryScore}
              label="Recovery Score"
              color="success"
              size="md"
              animated={true}
            />
          </div>
        </div>
      </motion.div>

      {/* Milestones */}
      <motion.div
        className="p-6 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl border border-[var(--color-gray-700)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">
            Milestones
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockData.milestones.map((milestone, index) => (
            <motion.div
              key={milestone.days}
              className={cn(
                'p-4 rounded-lg border-2 text-center transition-all duration-300',
                milestone.achieved
                  ? 'bg-[var(--color-primary)]/20 border-[var(--color-primary)]/30 text-[var(--color-primary)]'
                  : 'bg-[var(--color-gray-800)] border-[var(--color-gray-700)] text-gray-400'
              )}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <div className="flex justify-center mb-2">
                {milestone.achieved ? (
                  <Star className="w-6 h-6 fill-current" />
                ) : (
                  <Target className="w-6 h-6" />
                )}
              </div>
              <div className="mb-1">
                <AnimatedCounter
                  value={milestone.days}
                  size="sm"
                  color={milestone.achieved ? 'primary' : 'gray'}
                  duration={1}
                  delay={1 + index * 0.1}
                />
              </div>
              <p className="text-xs font-medium">
                {milestone.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Insights */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Mental Health Score */}
        <div className="p-6 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl border border-[var(--color-gray-700)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Mental Wellness
            </h3>
          </div>
          
          <div className="text-center">
            <div className="mb-2">
              <AnimatedCounter
                value={82}
                size="lg"
                color="primary"
                suffix="%"
                duration={2}
                delay={1.2}
              />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Improvement from baseline
            </p>
            <div className="flex justify-center gap-4 text-xs text-gray-400">
              <span>Anxiety: ↓23%</span>
              <span>Sleep: ↑31%</span>
              <span>Focus: ↑18%</span>
            </div>
          </div>
        </div>

        {/* Support Network */}
        <div className="p-6 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl border border-[var(--color-gray-700)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Support Network
            </h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Community Posts</span>
              <AnimatedCounter
                value={23}
                size="sm"
                color="white"
                duration={1.5}
                delay={1.4}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Messages Sent</span>
              <AnimatedCounter
                value={156}
                size="sm"
                color="white"
                duration={1.5}
                delay={1.6}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Support Given</span>
              <AnimatedCounter
                value={89}
                size="sm"
                color="white"
                duration={1.5}
                delay={1.8}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export { ProgressVisualization, type ProgressVisualizationProps }