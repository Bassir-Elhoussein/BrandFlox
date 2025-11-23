"use client"

interface WhyChooseProps {
  language: "en" | "fr"
}

const reasons = {
  en: [
    { number: "01", title: "Modern Design", description: "Cutting-edge, contemporary designs that stand out" },
    { number: "02", title: "Fast Performance", description: "Lightning-fast loading times and smooth interactions" },
    { number: "03", title: "Mobile-First", description: "Perfect experience on all devices and screen sizes" },
    { number: "04", title: "SEO Optimized", description: "Built-in SEO best practices for maximum visibility" },
    { number: "05", title: "Tailor-Made", description: "Custom solutions designed specifically for your industry" },
    { number: "06", title: "Secure & Reliable", description: "Enterprise-grade security and 99.9% uptime guarantee" },
  ],
  fr: [
    { number: "01", title: "Design Moderne", description: "Designs contemporains et innovants qui se démarquent" },
    { number: "02", title: "Performance Rapide", description: "Chargements ultrarapides et interactions fluides" },
    { number: "03", title: "Mobile First", description: "Expérience parfaite sur tous les appareils" },
    { number: "04", title: "Optimisé SEO", description: "Meilleures pratiques SEO intégrées" },
    { number: "05", title: "Sur Mesure", description: "Solutions personnalisées pour votre industrie" },
    { number: "06", title: "Sécurisé et Fiable", description: "Sécurité de classe entreprise et garantie 99,9%" },
  ],
}

export default function WhyChoose({ language }: WhyChooseProps) {
  const title = language === "en" ? "Why Choose Bandflox" : "Pourquoi Choisir Bandflox"

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons[language].map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                  {reason.number}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
