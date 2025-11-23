"use client"

interface PartnersProps {
  language: "en" | "fr"
}

export default function Partners({ language }: PartnersProps) {
  const content = {
    en: {
      title: "Our Partners & Clients",
      subtitle: "Trusted by leading brands and businesses worldwide",
      clients: [
        { id: 1, name: "Client 1", logo: "/images/icon.png" },
        { id: 2, name: "Client 2", logo: "/images/logo.jpg" },
        { id: 3, name: "Client 3", logo: "/images/452112542_1050569023401197_530235448696820762_n.jpg" },
        { id: 4, name: "Client 4", logo: "/images/yoatelier.jpg" },
        { id: 5, name: "Client 5", logo: "/images/stone-logo.png" },
        
      ],
    },
    fr: {
      title: "Nos Partenaires et Clients",
      subtitle: "Approuvés par les grandes marques et entreprises du monde entier",
      clients: [
        { id: 1, name: "Client 1", logo: "https://via.placeholder.com/200x100?text=Client+1" },
        { id: 2, name: "Client 2", logo: "https://via.placeholder.com/200x100?text=Client+2" },
        { id: 3, name: "Client 3", logo: "https://via.placeholder.com/200x100?text=Client+3" },
        { id: 4, name: "Client 4", logo: "https://via.placeholder.com/200x100?text=Client+4" },
        { id: 5, name: "Client 5", logo: "https://via.placeholder.com/200x100?text=Client+5" },
        
      ],
    },
  }

  return (
    <section id="partners" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{content[language].title}</h2>
          <p className="text-xl text-muted-foreground">{content[language].subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {content[language].clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-5 bg-background rounded-lg border border-border hover:border-primary transition-colors hover:shadow-md"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
