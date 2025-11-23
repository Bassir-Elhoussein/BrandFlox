"use client"

import { useEffect, useRef } from "react"

interface HeroProps {
  language: "en" | "fr"
}

export default function Hero({ language }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  const content = {
    en: {
      headline: "Your Digital Window on the Internet",
      subtitle: "Premium websites, branding, and digital identities that transform your online presence",
      cta: "Start Your Project",
    },
    fr: {
      headline: "Votre Fenêtre Numérique sur Internet",
      subtitle:
        "Sites web premium, identité de marque et solutions numériques qui transforment votre présence en ligne",
      cta: "Commencer Votre Projet",
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
        }
      })
    })

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
   <section className="relative w-full min-h-screen flex items-center justify-center bg-background">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div
        ref={heroRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 translate-y-8 transition-all duration-1000"
      >
        {/* Logo Display */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24  rounded-2xl p-1  flex items-center justify-center">
            <img src="/images/darklogo.png" alt="Bandflox Logo" className="w-full h-full object-contain dark:invert" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          {content[language].headline}
        </h1>

        <p className="text-lg sm:text-xl text-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          {content[language].subtitle}
        </p>

        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {content[language].cta}
        </a>

        {/* MacBook & iPhone Mockups */}
       <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-end">
  {/* MacBook Mockup */}
  <div className="relative group flex justify-center">
    <img
      src="/macbook-frame.png"
      alt="MacBook Frame"
      className="w-full h-auto object-contain"
    />

    {/* Shadow */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-48 h-3 bg-foreground/10 rounded-full blur-xl"></div>
  </div>

  {/* iPhone Mockup */}
  <div className="relative group flex justify-center">
    <img
      src="/iphone-frame.png"
      alt="iPhone Frame"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

      </div>
    </section>
  )
}
