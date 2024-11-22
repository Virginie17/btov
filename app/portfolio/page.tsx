"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    tags: ["HTML","CSS","JavaScript"," API"],
  },
  {
    title: "Kasa",
    description: "Implémentation du front-end d une application de logement .",
    image: "/assets/projets/Kasa.webp",
    tags: ["SEO","Performance","Accessibilité","Responsive"],
  },
  {
    title: "Argent Bank",
    description: "Développement front-end d'une application bancaire .",
    image: "/assets/projets/argentbank.webp",
    tags: ["REACT","REDUX","TYPESCRIPT"],
  }
];


const testimonials = [
  {
    name: "Sophie Martin",
    role: "CEO, TechStart",
    content: "Un développeur exceptionnel qui a su transformer notre vision en réalité. Le site web qu'il a créé dépasse toutes nos attentes.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    name: "Thomas Dubois",
    role: "Fondateur, EcoShop",
    content: "Excellent travail sur notre plateforme e-commerce. La qualité du code et l'attention aux détails sont remarquables.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    name: "Marie Laurent",
    role: "Directrice Marketing, InnoTech",
    content: "Une collaboration très professionnelle. Le résultat final est à la hauteur de nos exigences.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5
  }
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Mon Portfolio"
        description="Découvrez mes dernières réalisations et projets"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 sm:h-64 md:h-48 w-full group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <section className="mt-32">
        <SectionHeader
          title="Témoignages"
          description="Ce que mes clients disent de mon travail"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
