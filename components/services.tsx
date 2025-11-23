"use client"

import { Globe, Palette, Smartphone, Sparkles, Zap, Wrench } from "lucide-react"

interface ServicesProps {
  language: "en" | "fr"
}

const services = {
  en: [
    { icon: Globe, title: "Professional Website Creation", description: "Modern, fast, and mobile-friendly websites tailored to your business needs" },
    { icon: Palette, title: "Branding & Visual Identity", description: "Complete brand development from logo design to full visual identity systems" },
    { icon: Smartphone, title: "Online Portfolios", description: "Stunning portfolio websites for architects, freelancers, and creative professionals" },
    { icon: Sparkles, title: "UI/UX Design", description: "Pixel-perfect interface design with exceptional user experience" },
    { icon: Zap, title: "Fast & Secure Hosting", description: "Reliable, secure, and optimized hosting with excellent performance" },
    { icon: Wrench, title: "Maintenance & Support", description: "Ongoing support and updates to keep your digital presence thriving" },
  ],
  fr: [
    { icon: Globe, title: "Création de Sites Web Professionnels", description: "Sites web modernes, rapides et adaptés à vos besoins commerciaux" },
    { icon: Palette, title: "Branding et Identité Visuelle", description: "Développement complet de la marque du logo à l'identité visuelle complète" },
    { icon: Smartphone, title: "Portefeuilles en Ligne", description: "Sites de portefeuille magnifiques pour architectes, freelanceurs et créatifs" },
    { icon: Sparkles, title: "Conception UI/UX", description: "Design d'interface pixel-perfect avec une excellente expérience utilisateur" },
    { icon: Zap, title: "Hébergement Rapide et Sécurisé", description: "Hébergement fiable, sécurisé et optimisé avec d'excellentes performances" },
    { icon: Wrench, title: "Maintenance et Support", description: "Support continu et mises à jour pour maintenir votre présence numérique" },
  ],
}

export default function Services({ language }: ServicesProps) {
  const title = language === "en" ? "Our Services" : "Nos Services"

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[language].map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-secondary rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
