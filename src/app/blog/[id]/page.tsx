import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react'
import { supabase, type Article } from '@/lib/supabase'

interface BlogPostProps {
  params: Promise<{
    id: string
  }>
}

// Helper function to estimate read time
function estimateReadTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

async function getArticle(id: string): Promise<Article | null> {
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching article:', error)
    return null
  }

  return article
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { id } = await params
  const article = await getArticle(id)
  
  if (!article) {
    return {
      title: 'Article Not Found - CashOut',
      description: 'The requested article could not be found.',
    }
  }

  return {
    title: `${article.title} - CashOut Blog`,
    description: article.content.substring(0, 160) + '...',
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params
  const article = await getArticle(id)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[var(--color-black)]">
      {/* Navbar buffer */}
      <div className="h-20 lg:h-24"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] font-medium transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{estimateReadTime(article.content)}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                <span>{article.like_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsDown className="w-4 h-4" />
                <span>{article.dislike_count}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {article.content}
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-[var(--color-gray-700)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 mb-2">Last updated</p>
              <p className="text-white">
                {new Date(article.updated_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            
            <Link
              href="/blog"
              className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
            >
              Read More Articles
            </Link>
          </div>
        </footer>

        {/* Related Articles Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Continue Reading</h2>
          <div className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-2xl p-8 border border-[var(--color-gray-700)] text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Explore More Recovery Resources
            </h3>
            <p className="text-gray-300 mb-6">
              Discover more articles, tips, and success stories to support your journey to recovery.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
            >
              View All Articles
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}