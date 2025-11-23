"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react"

interface FooterProps {
  language: "en" | "fr"
}

export default function Footer({ language }: FooterProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc =
    mounted && theme === "dark" ? "/images/whitelogo.png" : "/images/darklogo.png"

  const content = {
    en: {
      company: "Bandflox",
      tagline: "Premium digital agency",
      links: [
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Partners", href: "#partners" },
        { label: "Contact", href: "#contact" },
      ],
      social: [
        { label: "Instagram", href: "https://www.instagram.com/brandflox", icon: Instagram },
        { label: "WhatsApp", href: "https://wa.me/212663108538", icon: MessageCircle },
        { label: "Email", href: "mailto:brandflox@gmail.com", icon: Mail },
      ],
      address: "Casanershore, Casablanca — Morocco",
      email: "brandflox@gmail.com",
      phone: "+212 6 63 10 85 38",
      copyright: "© 2025 Bandflox. All rights reserved.",
    },
    fr: {
      company: "Bandflox",
      tagline: "Agence numérique premium",
      links: [
        { label: "Services", href: "#services" },
        { label: "Portefeuille", href: "#portfolio" },
        { label: "Partenaires", href: "#partners" },
        { label: "Contact", href: "#contact" },
      ],
      social: [
        { label: "Instagram", href: "https://www.instagram.com/brandflox", icon: Instagram },
        { label: "WhatsApp", href: "https://wa.me/212663108538", icon: MessageCircle },
        { label: "Email", href: "mailto:brandflox@gmail.com", icon: Mail },
      ],
      address: "Casanershore, Casablanca — Maroc",
      email: "brandflox@gmail.com",
      phone: "+212 6 63 10 85 38",
      copyright: "© 2025 Bandflox. Tous droits réservés.",
    },
  }

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Logo + Brand */}
          <div>
            <div className="w-32 h-32 rounded-lg p-2 mb-4 flex items-center justify-center">
              <img
                src={logoSrc || "/placeholder.svg"}
                alt="Bandflox Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{content[language].company}</h3>
            <p className="text-primary-foreground/80 text-sm">
              {content[language].tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === "en" ? "Navigation" : "Navigation"}
            </h4>
            <ul className="space-y-2">
              {content[language].links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === "en" ? "Follow Us" : "Suivez-nous"}
            </h4>
            <ul className="space-y-3">
              {content[language].social.map((s, index) => (
                <li key={`social-${index}`}>
                  <a
                    href={s.href}
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    target="_blank"
                  >
                    <s.icon size={16} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === "en" ? "Contact" : "Contact"}
            </h4>

            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-3">
              <MapPin size={16} />
              {content[language].address}
            </div>

            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-3">
              <Mail size={16} />
              {content[language].email}
            </div>

            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <Phone size={16} />
              {content[language].phone}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            {content[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
