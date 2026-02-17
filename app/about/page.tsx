import { Navbar } from "@/components/navbar"
import { FloatingWidget } from "@/components/floating-widget"
import { Footer } from "@/components/footer"
import { Github, Twitter, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Prady Neog",
  description: "About Prady Neog - developer, writer, and technical blogger.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="px-6 pt-36 pb-24">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-widest uppercase text-muted-foreground">
            About
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Prady Neog
          </h1>

          <div className="mt-12 flex flex-col gap-6">
            <FloatingWidget>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Hello! I am Prady. Welcome to my corner of the internet.
                </p>
                <p>
                  This is my technical diary where I document small blogs of 1-2
                  min read -- sharing useful commands, concepts, tips and tricks,
                  new languages, and more. I try to document things that I
                  experience in my own professional life, where I need to search
                  the internet to get some answers.
                </p>
                <p>
                  My aim is to make each post short, useful, and straight to the
                  point. No fluff, just the things that actually help.
                </p>
              </div>
            </FloatingWidget>

            <FloatingWidget>
              <p className="mb-5 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Connect
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/pradyneo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Github className="h-4 w-4" />
                  </div>
                  <span className="text-sm">github.com/pradyneo</span>
                </a>
                <a
                  href="https://twitter.com/pradyneo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Twitter className="h-4 w-4" />
                  </div>
                  <span className="text-sm">@pradyneo</span>
                </a>
                <a
                  href="mailto:prady@tuta.io"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm">prady@tuta.io</span>
                </a>
              </div>
            </FloatingWidget>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
