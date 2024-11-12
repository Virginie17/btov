"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Mode",
    description: "Plateforme e-commerce complète pour une marque de mode",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Application de Gestion",
    description: "Système de gestion interne pour une entreprise de logistique",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Site Vitrine Restaurant",
    description: "Site web moderne pour un restaurant gastronomique",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Sophie Bluel Architecte",
    description: "Création d'une page web dynamique pour le site internet d'une architecte d'intérieur .",
    image: "/assets/projets/sophiebluel.webp",
    tags: ["HTML | CSS | JS, API"],
  },
  {
    title: "Kasa",
    description: "Implémentation du front-end d une application de logement .",
    image: "/assets/projets/Kasa.webp",
    tags: ["SEO | Performance | Accessibilité | Responsive"],
  },
  {
    title: "Argent Bank",
    description: "Développement front-end d'une application bancaire .",
    image: "/assets/projets/argentbank.webp",
    tags: ["REACT REDUX | TYPESCRIPT"],
  }
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Mon Portfolio"
        description="Découvrez mes dernières réalisations et projets"
      />

      <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid"
          >
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}