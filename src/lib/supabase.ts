import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing Supabase URL. Please check your environment variables.')
}

if (!supabaseAnonKey) {
  throw new Error('Missing Supabase Anon Key. Please check your environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for the articles table
export interface Article {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
  like_count: number
  dislike_count: number
}

export interface ArticlePreview {
  id: string
  title: string
  content: string
  created_at: string
  like_count: number
  dislike_count: number
}