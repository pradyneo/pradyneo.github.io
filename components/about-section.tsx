"use client"

import { useParallax } from "@/hooks/use-parallax"
import { FloatingWidget } from "@/components/floating-widget"

export function AboutSection() {
  const scrollY = useParallax()

  return (
    <section id="about" className="relative px-6 py-32">
      {/* Parallax decorative element */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-[5%] top-[10%] h-40 w-40 rounded-full border border-border/10"
          style={{ transform: `translateY(${(scrollY - 600) * 0.08}px)` }}
        />
      </div>

      <div className="mx-auto max-w-4xl">
        <div
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 500) * 0.04)}px)`,
          }}
        >
          <p className="mb-3 text-xs font-medium tracking-widest uppercase text-muted-foreground">
            About
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            A little about me
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 650) * 0.03)}px)`,
            }}
          >
            <FloatingWidget className="h-full">
              <p className="text-base leading-relaxed text-muted-foreground">
                Hello! I am Prady. Welcome to my corner of the internet. This
                site serves as my technical diary where I document short,
                practical articles -- sharing useful commands, concepts, tips
                and tricks from my professional life.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Things I encounter daily that require searching the internet
                for answers -- those are exactly the things I write about here,
                so others (and future me) can find them quickly.
              </p>
            </FloatingWidget>
          </div>

          <div
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 700) * 0.05)}px)`,
            }}
          >
            <FloatingWidget className="h-full">
              <p className="mb-4 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                What I write about
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Unix / Linux",
                  "Terminal",
                  "macOS",
                  "CLI Tools",
                  "Developer Productivity",
                  "Shell Scripting",
                  "Oh-My-Zsh",
                  "iTerm2",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-secondary p-4">
                <p className="text-xs font-medium text-muted-foreground">
                  Posts are kept short -- typically 1-2 minute reads focused on
                  a single useful concept or command.
                </p>
              </div>
            </FloatingWidget>
          </div>
        </div>
      </div>
    </section>
  )
}
