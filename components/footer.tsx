import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pradyneo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com/pradyneo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="mailto:prady@tuta.io"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <div className="text-center">
          <p className="font-serif text-sm font-medium text-foreground">
            Prady Neog
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            A technical diary for the curious developer.
          </p>
        </div>
      </div>
    </footer>
  )
}
