"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

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
    content: "Une collaboration très professionnelle. Le résultat final est à la hauteur de nos exigences, avec un design moderne et une expérience utilisateur optimale.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Avis Clients"
        description="Ce que disent mes clients à propos de mon travail"
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
    </div>
  );
}
