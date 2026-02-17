import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { FloatingWidget } from "@/components/floating-widget"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/posts"
import { ArrowUpRight, Clock, Folder } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Prady Neog",
  description:
    "Technical blog posts about Unix, terminal tools, and developer tips.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <section className="px-6 pt-36 pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Writing
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Short, useful posts about things I learn along the way.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <FloatingWidget className="transition-all duration-300 group-hover:-translate-y-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                          <Folder className="h-3 w-3" />
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-muted-foreground md:text-xl">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-xs text-muted-foreground/60">
                        {post.date}
                      </p>
                    </div>
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-secondary transition-all duration-200 group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </FloatingWidget>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
