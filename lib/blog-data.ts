export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tendances-developpement-web-2024",
    title: "Les Tendances du Développement Web en 2024",
    date: "2024-03-15",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    excerpt: "Découvrez les technologies et pratiques qui façonnent le développement web en 2024.",
    tags: ["Tendances", "Web", "2024"],
    content: `
# Les Tendances du Développement Web en 2024

Le développement web évolue constamment, et 2024 apporte son lot de nouvelles tendances passionnantes...

## 1. Web Components et Micro-Frontends

L'architecture micro-frontends continue de gagner en popularité...

## 2. Performance et Core Web Vitals

Google accorde une importance croissante aux métriques de performance...

## 3. JAMstack et Architectures Headless

L'approche JAMstack continue d'évoluer...
    `
  },
  {
    slug: "optimisation-performance-web",
    title: "Guide Complet sur l'Optimisation des Performances Web",
    date: "2024-03-10",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    excerpt: "Apprenez les meilleures pratiques pour optimiser les performances de votre site web.",
    tags: ["Performance", "Optimisation", "Web Vitals"],
    content: `
# Guide Complet sur l'Optimisation des Performances Web

La performance est un facteur clé du succès d'un site web...

## Pourquoi la Performance est Importante

La vitesse de chargement affecte directement...

## Techniques d'Optimisation

1. Optimisation des images
2. Mise en cache efficace
3. Minification des ressources
    `
  },
  {
    slug: "securite-applications-web",
    title: "Sécurité des Applications Web : Les Bonnes Pratiques",
    date: "2024-03-05",
    coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    excerpt: "Un guide complet sur la sécurisation de vos applications web modernes.",
    tags: ["Sécurité", "Web", "Bonnes Pratiques"],
    content: `
# Sécurité des Applications Web : Les Bonnes Pratiques

La sécurité est un aspect crucial du développement web...

## Principales Menaces

1. Injections SQL
2. XSS (Cross-Site Scripting)
3. CSRF (Cross-Site Request Forgery)

## Mesures de Protection

Découvrez les meilleures pratiques...
    `
  }
];