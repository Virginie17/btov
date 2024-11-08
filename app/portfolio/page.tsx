"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
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
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardTitle>
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
    </div>
  );
}