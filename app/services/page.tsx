"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  Gauge, 
  Search, 
  Shield 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Développement Web",
    description: "Sites web modernes et réactifs, développés avec les dernières technologies pour une expérience utilisateur optimale.",
  },
  {
    icon: Smartphone,
    title: "Applications Web Progressive",
    description: "Applications web performantes qui fonctionnent comme des applications natives sur tous les appareils.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Solutions e-commerce complètes avec gestion des produits, paiements sécurisés et expérience d'achat optimisée.",
  },
  {
    icon: Gauge,
    title: "Performance Web",
    description: "Optimisation des performances pour des temps de chargement rapides et une meilleure expérience utilisateur.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Optimisation pour les moteurs de recherche afin d'améliorer votre visibilité en ligne.",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Services de maintenance continue et support technique pour garantir le bon fonctionnement de votre site.",
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Nos Services"
        description="Des solutions web sur mesure pour répondre à vos besoins spécifiques"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <service.icon className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="mb-4 text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Button asChild size="lg">
          <Link href="/contact">Discuter de votre projet</Link>
        </Button>
      </motion.div>
    </div>
  );
}