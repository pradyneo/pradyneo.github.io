import { FloatingWidget } from "@/components/floating-widget";
import { Footer } from "@/components/footer";
import { Github, Twitter, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Prady Neog",
  description: "About Prady Neog - developer, writer, and technical blogger.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-2xl">
          <p className="mb-2 text-xs font-medium tracking-widest uppercase text-muted-foreground">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Prady Neog
          </h1>

          <div className="mt-12 flex flex-col gap-6">
            <FloatingWidget>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Hello friend! I am Prady. Welcome to my blog.
                </p>
                <p>
                  This is my technical diary where I document small blogs of 1-2
                  min read - sharing useful commands, concepts, tips and tricks,
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
              <p className="mb-4 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Connect
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/pradyneo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm">github.com/pradyneo</span>
                </a>
                <a
                  href="https://twitter.com/pradyneo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="text-sm">@pradyneo</span>
                </a>
                <a
                  href="mailto:prady@tuta.io"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">prady@tuta.io</span>
                </a>
              </div>
            </FloatingWidget>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
