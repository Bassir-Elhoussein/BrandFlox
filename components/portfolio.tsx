"use client"

interface PortfolioProps {
  language: "en" | "fr"
}

export default function Portfolio({ language }: PortfolioProps) {
  const title = language === "en" ? "Our Latest Work" : "Nos Derniers Travaux"
  const subtitle =
    language === "en"
      ? "Explore our portfolio of premium digital experiences"
      : "Explorez notre portefeuille d'expériences numériques premium"

  const portfolioItems = [
    {
      image: "/fabtower.png",
      name: "FAB Tower",
      description: language === "en" ? "Architecture & modern design" : "Architecture & design moderne",
    },
    {
      image: "/yoatelier.png",
      name: "Yo Atelier",
      description: language === "en" ? "Creative studio portfolio" : "Portfolio d'atelier créatif",
    },
    {
      image: "/stoneconcept.png",
      name: "Stone Concept",
      description: language === "en" ? "Luxury stone craftsmanship" : "Artisanat de pierre haut de gamme",
    },
    {
      image: "/lysarchi.png",
      name: "Lys Architectes",
      description: language === "en" ? "Elegant architecture website" : "Site d’architecture élégant",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-lg text-foreground mb-4">{subtitle}</p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white font-bold text-lg mb-1">{item.name}</h3>

                {/* description always white */}
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
