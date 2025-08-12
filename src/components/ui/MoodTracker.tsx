'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Smile, Meh, Frown, Heart, Brain, Zap } from 'lucide-react'

interface MoodEntry {
  id: string
  mood: 'great' | 'good' | 'okay' | 'bad' | 'terrible'
  date: string
  note?: string
}

interface MoodTrackerProps {
  entries?: MoodEntry[]
  interactive?: boolean
  className?: string
}

const moodConfig = {
  great: {
    icon: Smile,
    color: 'text-green-400',
    bgColor: 'bg-green-400/20',
    borderColor: 'border-green-400/30',
    label: 'Great',
    value: 5
  },
  good: {
    icon: Smile,
    color: 'text-[var(--color-primary)]',
    bgColor: 'bg-[var(--color-primary)]/20',
    borderColor: 'border-[var(--color-primary)]/30',
    label: 'Good',
    value: 4
  },
  okay: {
    icon: Meh,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/20',
    borderColor: 'border-yellow-400/30',
    label: 'Okay',
    value: 3
  },
  bad: {
    icon: Frown,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/20',
    borderColor: 'border-orange-400/30',
    label: 'Bad',
    value: 2
  },
  terrible: {
    icon: Frown,
    color: 'text-red-400',
    bgColor: 'bg-red-400/20',
    borderColor: 'border-red-400/30',
    label: 'Terrible',
    value: 1
  }
}

const defaultEntries: MoodEntry[] = [
  { id: '1', mood: 'good', date: '2024-01-07' },
  { id: '2', mood: 'great', date: '2024-01-06' },
  { id: '3', mood: 'okay', date: '2024-01-05' },
  { id: '4', mood: 'good', date: '2024-01-04' },
  { id: '5', mood: 'great', date: '2024-01-03' },
  { id: '6', mood: 'good', date: '2024-01-02' },
  { id: '7', mood: 'okay', date: '2024-01-01' }
]

const MoodTracker: React.FC<MoodTrackerProps> = ({
  entries = defaultEntries,
  interactive = false,
  className
}) => {
  const [selectedMood, setSelectedMood] = useState<keyof typeof moodConfig | null>(null)

  const averageMood = entries.length > 0 
    ? entries.reduce((sum, entry) => sum + moodConfig[entry.mood].value, 0) / entries.length
    : 0

  const getAverageMoodLabel = (avg: number) => {
    if (avg >= 4.5) return 'Excellent'
    if (avg >= 3.5) return 'Good'
    if (avg >= 2.5) return 'Fair'
    if (avg >= 1.5) return 'Poor'
    return 'Very Poor'
  }

  return (
    <motion.div
      className={cn(
        'p-6 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-xl border border-[var(--color-gray-700)]',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-blue-light)] rounded-lg">
          <Heart className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            Mood Tracking
          </h3>
          <p className="text-sm text-gray-400">
            Average: {getAverageMoodLabel(averageMood)} ({averageMood.toFixed(1)}/5)
          </p>
        </div>
      </div>

      {/* Mood Selection (if interactive) */}
      {interactive && (
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-300 mb-3">
            How are you feeling today?
          </p>
          <div className="flex gap-2">
            {Object.entries(moodConfig).map(([mood, config]) => {
              const Icon = config.icon
              const isSelected = selectedMood === mood
              
              return (
                <motion.button
                  key={mood}
                  onClick={() => setSelectedMood(mood as keyof typeof moodConfig)}
                  className={cn(
                    'flex-1 p-3 rounded-lg border-2 transition-all duration-200',
                    isSelected 
                      ? `${config.bgColor} ${config.borderColor} ${config.color}` 
                      : 'bg-[var(--color-gray-800)] border-[var(--color-gray-700)] text-gray-400 hover:border-[var(--color-gray-600)]'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium">
                    {config.label}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      )}

      {/* Recent Mood History */}
      <div>
        <p className="text-sm font-medium text-gray-300 mb-3">
          Recent History
        </p>
        <div className="space-y-2">
          {entries.slice(0, 5).map((entry, index) => {
            const config = moodConfig[entry.mood]
            const Icon = config.icon
            const date = new Date(entry.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })

            return (
              <motion.div
                key={entry.id}
                className="flex items-center gap-3 p-2 rounded-lg bg-[var(--color-gray-800)]/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className={cn(
                  'p-1.5 rounded-full',
                  config.bgColor
                )}>
                  <Icon className={cn('w-4 h-4', config.color)} />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-white">
                    {config.label}
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  {date}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mood Insights */}
      <div className="mt-6 pt-4 border-t border-[var(--color-gray-700)]">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Brain className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-xs font-medium text-gray-300">
                Consistency
              </span>
            </div>
            <span className="text-sm font-bold text-white">
              {entries.length > 0 ? '7 days' : '0 days'}
            </span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap className="w-4 h-4 text-[var(--color-blue)]" />
              <span className="text-xs font-medium text-gray-300">
                Trend
              </span>
            </div>
            <span className="text-sm font-bold text-white">
              {averageMood >= 3.5 ? 'Improving' : 'Stable'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export { MoodTracker, type MoodTrackerProps, type MoodEntry }