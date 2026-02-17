"use client"

import { useParallax } from "@/hooks/use-parallax"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollY = useParallax()

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      {/* Parallax decorative rings */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-[8%] top-[12%] h-72 w-72 rounded-full border border-border/20"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute right-[12%] top-[16%] h-56 w-56 rounded-full border border-border/10"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
        <div
          className="absolute bottom-[18%] left-[6%] h-48 w-48 rounded-full border border-border/15"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div
          className="absolute left-[10%] top-[25%] h-20 w-20 rounded-full border border-border/10"
          style={{ transform: `translateY(${scrollY * -0.18}px)` }}
        />
        <div
          className="absolute right-[20%] top-[55%] h-32 w-32 rounded-full border border-border/10"
          style={{ transform: `translateY(${scrollY * 0.22}px)` }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute left-[15%] top-[35%] grid grid-cols-5 gap-4 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-foreground/30" />
          ))}
        </div>
      </div>

      {/* Main content with parallax */}
      <div
        className="relative z-10 max-w-2xl text-center"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-muted-foreground shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Developer & Writer
        </div>
        <h1 className="text-balance font-serif text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Prady Neog
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Writing about Unix, terminal tools, and the small things that make
          developer life easier. A technical diary for the curious.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#writing"
            className="inline-flex items-center rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
          >
            Read the Blog
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:scale-[1.03] hover:bg-muted"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
