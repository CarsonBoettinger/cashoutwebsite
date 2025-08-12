import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { supabase, type ArticlePreview } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Blog - CashOut',
  description: 'Recovery tips, success stories, and insights to help you on your journey to overcome gambling addiction.',
}

// Helper function to create excerpt from content
function createExcerpt(content: string, maxLength: number = 150): string {
  if (content.length <= maxLength) return content
  return content.substring(0, maxLength).trim() + '...'
}

// Helper function to estimate read time
function estimateReadTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

async function getArticles(): Promise<ArticlePreview[]> {
  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, content, created_at, like_count, dislike_count')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching articles:', error)
    return []
  }

  return articles || []
}



export default async function Blog() {
  const articles = await getArticles()
  const featuredPost = articles[0] // Use the most recent article as featured
  const blogPosts = articles.slice(1) // Rest of the articles
  return (
    <main className="min-h-screen bg-[var(--color-black)]">
      {/* Navbar buffer */}
      <div className="h-20 lg:h-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-[var(--color-primary-light)] bg-clip-text text-transparent">
              Recovery
            </span>{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-primary)] to-white bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert insights, success stories, and practical tips to support your journey to recovery and financial freedom.
          </p>
        </div>



        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-2xl p-8 lg:p-12 border border-[var(--color-gray-700)] hover:border-[var(--color-primary)]/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full text-sm font-medium">
                  Featured
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>👍 {featuredPost.like_count}</span>
                  <span>👎 {featuredPost.dislike_count}</span>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                {featuredPost.title}
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {createExcerpt(featuredPost.content, 200)}
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(featuredPost.created_at).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{estimateReadTime(featuredPost.content)}</span>
                </div>
              </div>

              <Link
                href={`/blog/${featuredPost.id}`}
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] font-medium transition-colors duration-200 group/link"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[var(--color-gray-900)] rounded-xl p-6 border border-[var(--color-gray-700)] hover:border-[var(--color-primary)]/50 transition-all duration-300 group hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>👍 {post.like_count}</span>
                  <span>👎 {post.dislike_count}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{estimateReadTime(post.content)}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--color-primary-light)] transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {createExcerpt(post.content)}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] text-sm font-medium transition-colors duration-200 group/link"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No articles message */}
        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found. Check back soon for new content!</p>
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[var(--color-gray-800)] text-white rounded-lg font-medium hover:bg-[var(--color-primary)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-black)]">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] rounded-2xl p-8 lg:p-12 border border-[var(--color-gray-700)] text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Stay Updated on Your Recovery Journey
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get weekly recovery tips, success stories, and expert insights delivered to your inbox.
            Join thousands of others on the path to freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[var(--color-gray-800)] border border-[var(--color-gray-600)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            />
            <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Your privacy is important to us.
          </p>
        </div>
      </div>
    </main>
  )
}