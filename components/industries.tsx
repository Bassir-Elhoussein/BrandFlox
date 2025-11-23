"use client"

import { Factory, Utensils, Stethoscope, DraftingCompass,Star,Briefcase,Users} from "lucide-react";


interface IndustriesProps {
  language: "en" | "fr";
}

export interface Industry {
  name: string;
  icon: React.ComponentType | string;
}

export const industriesData: Record<"en" | "fr", Industry[]> = {
  en: [
    { name: "Companies & Startups", icon: Factory },
    { name: "Restaurants & Coffee Shops", icon: Utensils },
    { name: "Medical & Clinics", icon: Stethoscope },
    { name: "Architects", icon: DraftingCompass },
    { name: "Personal Brands", icon:Star },
    { name: "Freelancers", icon: Briefcase },
    { name: "Managers & Teams", icon:Users },
  ],
  fr: [
    { name: "Entreprises et Startups", icon: Factory },
    { name: "Restaurants et Cafés", icon: Utensils },
    { name: "Médical et Cliniques", icon: Stethoscope },
    { name: "Architectes", icon: DraftingCompass },
    { name: "Marques Personnelles", icon:Star },
    { name: "Freelanceurs", icon: Briefcase },
    { name: "Gestionnaires et Équipes", icon:Users },
  ],
}

export default function Industries({ language }: IndustriesProps) {
  const title = language === "en" ? "Industries We Serve" : "Industries que Nous Servons"

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {industriesData[language].map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-black rounded-xl border border-black dark:border-white/20 hover:border-primary dark:hover:border-primary hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                {typeof industry.icon === "string" ? (
                  industry.icon
                ) : (
                  <industry.icon className="w-12 h-12 mx-auto" />
                )}
              </div>
              <p className="font-semibold text-sm text-foreground">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
