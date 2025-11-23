"use client"

import { useEffect, useState } from "react"
import { Instagram } from "lucide-react" // ✅ correct import

interface FloatingSocialProps {
  language: "en" | "fr"
}

export default function FloatingSocial({ language }: FloatingSocialProps) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

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

  if (!mounted) return null

  const socialLinks = [
    {
      id: "whatsapp",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.78 11.78 0 0012 0 11.94 11.94 0 000 12a11.84 11.84 0 001.69 6L0 24l6.17-1.62A11.93 11.93 0 0012 24a11.94 11.94 0 0012-12 11.78 11.78 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.08-1.39l-.36-.21-3.65.96.97-3.56-.24-.37A9.92 9.92 0 1122 12a9.84 9.84 0 01-10 10zm5.44-7.36c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.66.15-.75.97-.92 1.17-.34.22-.64.07a8.18 8.18 0 01-2.4-1.48 9 9 0 01-1.66-2.07c-.17-.3 0-.46.13-.61s.3-.35.45-.52a1.93 1.93 0 00.3-.52.56.56 0 00-.02-.54c-.07-.15-.66-1.6-.91-2.2s-.48-.48-.66-.49h-.57a1.11 1.11 0 00-.8.37A3.36 3.36 0 006 10.73a5.84 5.84 0 001.24 3.08 13.34 13.34 0 004.05 3.67 13.17 13.17 0 003.15 1.27 3 3 0 002.88-.47 2.34 2.34 0 00.71-1.56c.1-.15.1-.57-.2-.72z" />
        </svg>
      ),
      label: language === "en" ? "WhatsApp" : "WhatsApp",
      href: "https://wa.me/212663108538",
    },
    {
      id: "email",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: language === "en" ? "Email" : "Email",
      href: "mailto:brandflox@gmail.com",
    },
    {
      id: "instagram",
      icon: <Instagram className="w-6 h-6" />, // ✅ using lucide-react icon
      label: language === "en" ? "Instagram" : "Instagram",
      href: "https://www.instagram.com/brandflox",
    },
  ]

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          className={`w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}
          aria-label={social.label}
          title={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
