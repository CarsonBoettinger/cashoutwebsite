import { Hero, AppShowcase, Progress, Testimonials, CTA, Footer } from '@/components/sections'

export default function Home() {
  return (
    <main id="main-content" role="main">
      <Hero />
      <AppShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
