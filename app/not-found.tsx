import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          404
        </p>
        <h1 className="mt-2 font-serif text-5xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.03] hover:shadow-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Home
        </Link>
      </div>
    </section>
  )
}
