import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { RecentPosts } from "@/components/recent-posts"
import { InfoWidgets } from "@/components/info-widgets"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RecentPosts posts={posts} />
      <InfoWidgets />
      <Footer />
    </main>
  )
}
