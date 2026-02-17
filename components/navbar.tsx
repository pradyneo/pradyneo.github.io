"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-out",
            scrolled
              ? "w-auto min-w-[280px] max-w-md rounded-full bg-card/80 px-5 py-2.5 shadow-lg shadow-foreground/5 backdrop-blur-xl border border-border"
              : "w-full max-w-4xl rounded-2xl bg-card/60 px-8 py-5 shadow-md shadow-foreground/5 backdrop-blur-md border border-border/50"
          )}
        >
          <Link
            href="/"
            className={cn(
              "font-serif font-bold tracking-tight text-foreground transition-all duration-500",
              scrolled ? "text-sm" : "text-lg"
            )}
          >
            Prady Neog
          </Link>

          {/* Desktop nav links */}
          <div
            className={cn(
              "hidden items-center transition-all duration-500 md:flex",
              scrolled ? "gap-0.5" : "gap-1"
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-full font-medium text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground",
                  scrolled ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger button - hidden by default on desktop, shown on mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className={cn("transition-all", scrolled ? "h-4 w-4" : "h-5 w-5")} />
            ) : (
              <Menu className={cn("transition-all", scrolled ? "h-4 w-4" : "h-5 w-5")} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-serif font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
