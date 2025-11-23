"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "./theme-toggle"

interface HeaderProps {
  language: "en" | "fr"
  setLanguage: (lang: "en" | "fr") => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"))
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const navLinks = {
    en: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Partners", href: "#partners" },
      { label: "Contact", href: "#contact" },
    ],
    fr: [
      { label: "Services", href: "#services" },
      { label: "Portefeuille", href: "#portfolio" },
      { label: "Partenaires", href: "#partners" },
      { label: "Contact", href: "#contact" },
    ],
  }

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {isDark ? (
              <img src="/images/darklogo.png" alt="Bandflox" className="h-10 w-10" />
            ) : (
              <img src="/images/whitelogo.png" alt="Bandflox" className="h-10 w-10" />
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks[language].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              {language === "en" ? "FR" : "EN"}
            </button>

            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks[language].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-foreground hover:text-accent transition-colors font-medium text-sm py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
