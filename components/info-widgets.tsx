"use client"

import { FloatingWidget } from "@/components/floating-widget"
import { useParallax } from "@/hooks/use-parallax"
import { Github, Twitter, Mail, Terminal } from "lucide-react"

export function InfoWidgets() {
  const scrollY = useParallax()

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-[8%] bottom-[15%] h-36 w-36 rounded-full border border-border/10"
          style={{ transform: `translateY(${(scrollY - 1800) * 0.06}px)` }}
        />
      </div>

      <div className="mx-auto max-w-4xl">
        <div
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 1700) * 0.04)}px)`,
          }}
        >
          <p className="mb-3 text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Contact
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-md text-base text-muted-foreground">
            Feel free to reach out if you want to discuss a project or just say
            hello.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Connect widget */}
          <div
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 1850) * 0.04)}px)`,
            }}
          >
            <FloatingWidget className="h-full">
              <p className="mb-5 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Connect
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/pradyneo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Github className="h-3.5 w-3.5" />
                  </div>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://twitter.com/pradyneo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Twitter className="h-3.5 w-3.5" />
                  </div>
                  <span>Twitter</span>
                </a>
                <a
                  href="mailto:prady@tuta.io"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <span>prady@tuta.io</span>
                </a>
              </div>
            </FloatingWidget>
          </div>

          {/* Quick Tip widget */}
          <div
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 1900) * 0.06)}px)`,
            }}
          >
            <FloatingWidget className="h-full">
              <p className="mb-5 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Quick Tip
              </p>
              <div className="rounded-xl bg-foreground p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-background/50" />
                  <span className="font-mono text-xs text-background/50">
                    terminal
                  </span>
                </div>
                <code className="font-mono text-sm text-background">
                  ls -1 | wc -l
                </code>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Count all files and folders in the current directory with this
                simple pipe command.
              </p>
            </FloatingWidget>
          </div>

          {/* Location / Info widget */}
          <div
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 1950) * 0.05)}px)`,
            }}
          >
            <FloatingWidget className="h-full">
              <p className="mb-5 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Currently
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-muted-foreground/60">Location</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    New York, USA
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60">Timezone</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    EST (UTC-5)
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60">Status</p>
                  <div className="mt-0.5 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <p className="text-sm font-medium text-foreground">
                      Open to connect
                    </p>
                  </div>
                </div>
              </div>
            </FloatingWidget>
          </div>
        </div>
      </div>
    </section>
  )
}
