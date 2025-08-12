import Link from 'next/link'
import { ArrowLeft, FileX } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--color-gray-700)] to-[var(--color-gray-800)] rounded-full flex items-center justify-center">
            <FileX className="w-10 h-10 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 leading-relaxed">
            The article you're looking for doesn't exist or may have been moved. 
            Let's get you back to our blog.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div>
            <Link
              href="/"
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] font-medium transition-colors duration-200"
            >
              Or go to homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}