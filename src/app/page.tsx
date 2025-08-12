import { Hero, Features, Progress, Testimonials, CTA, Footer } from '@/components/sections'

export default function Home() {
  return (
    <main id="main-content" role="main">
      <Hero />
      <Features />
      <Progress />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
