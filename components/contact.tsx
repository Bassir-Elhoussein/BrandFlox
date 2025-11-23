"use client"

import type React from "react"
import { useState } from "react"

interface ContactFormProps {
  language: "en" | "fr"
}

export default function ContactForm({ language }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Let's build your digital identity together",
      labels: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        company: "Company Name",
        message: "Tell us about your project",
      },
      button: "Send Message",
      placeholder: {
        name: "Your name",
        email: "your@email.com",
        phone: "+212 (XXX) 000-000",
        company: "Your company",
        message: "Describe your project...",
      },
      success: "Thanks! We'll be in touch soon.",
      errorMessage: "Failed to send message. Please try again.",
    },
    fr: {
      title: "Contactez-nous",
      subtitle: "Construisons votre identité numérique ensemble",
      labels: {
        name: "Nom Complet",
        email: "Adresse Email",
        phone: "Numéro de Téléphone",
        company: "Nom de l'Entreprise",
        message: "Parlez-nous de votre projet",
      },
      button: "Envoyer le Message",
      placeholder: {
        name: "Votre nom",
        email: "votre@email.com",
        phone: "+33 1 23 45 67 89",
        company: "Votre entreprise",
        message: "Décrivez votre projet...",
      },
      success: "Merci! Nous vous recontacterons bientôt.",
      errorMessage: "Échec de l'envoi du message. Veuillez réessayer.",
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, language }),
      })

      if (!response.ok) {
        throw new Error(content[language].errorMessage)
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : content[language].errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{content[language].title}</h2>
          <p className="text-lg text-foreground mb-6">{content[language].subtitle}</p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        {submitted && (
          <div className="mb-8 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 text-green-900 dark:text-green-100 rounded-lg text-center font-semibold">
            {content[language].success}
          </div>
        )}

        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-900 dark:text-red-100 rounded-lg text-center font-semibold">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-black p-8 rounded-xl border border-primary/20"
        >
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">{content[language].labels.name}</label>
            <input
              type="text"
              required
              placeholder={content[language].placeholder.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors bg-background text-foreground disabled:opacity-50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                {content[language].labels.email}
              </label>
              <input
                type="email"
                required
                placeholder={content[language].placeholder.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors bg-background text-foreground disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                {content[language].labels.phone}
              </label>
              <input
                type="tel"
                required
                placeholder={content[language].placeholder.phone}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors bg-background text-foreground disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              {content[language].labels.company}
              <span className="text-muted-foreground text-xs ml-2">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder={content[language].placeholder.company}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors bg-background text-foreground disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              {content[language].labels.message}
            </label>
            <textarea
              required
              placeholder={content[language].placeholder.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={loading}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors bg-background text-foreground resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? (language === "en" ? "Sending..." : "Envoi...") : content[language].button}
          </button>
        </form>
      </div>
    </section>
  )
}
