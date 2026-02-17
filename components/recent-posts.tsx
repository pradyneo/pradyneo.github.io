"use client"

import Link from "next/link"
import { FloatingWidget } from "@/components/floating-widget"
import { useParallax } from "@/hooks/use-parallax"
import { ArrowUpRight, Clock, Folder } from "lucide-react"
import type { Post } from "@/lib/posts"

export function RecentPosts({ posts }: { posts: Post[] }) {
  const scrollY = useParallax()

  return (
    <section id="writing" className="relative px-6 py-32">
      {/* Parallax background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-[3%] top-[20%] h-56 w-56 rounded-full border border-border/10"
          style={{ transform: `translateY(${(scrollY - 1200) * 0.06}px)` }}
        />
      </div>

      <div className="mx-auto max-w-4xl">
        <div
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 1100) * 0.04)}px)`,
          }}
        >
          <p className="mb-3 text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Writing
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Recent posts
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Short, practical articles from day-to-day development.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 1250 - i * 100) * 0.03)}px)`,
              }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
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
                      <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-muted-foreground md:text-xl">
                        {post.title}
                      </h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
