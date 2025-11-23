"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChoose from "@/components/why-choose"
import Industries from "@/components/industries"
import Portfolio from "@/components/portfolio"
import Partners from "@/components/partners"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingSocial from "@/components/floating-social"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = savedTheme === "dark" || (savedTheme === null && prefersDark)

    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  if (!mounted) return null

  return (
    <main className="w-full overflow-x-hidden">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <WhyChoose language={language} />
      <Industries language={language} />
      <Portfolio language={language} />
      <Partners language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <FloatingSocial language={language} />
    </main>
  )
}
