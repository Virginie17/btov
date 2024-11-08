import { NextResponse } from 'next/server';
import { BlogPost } from '@/lib/blog-data';

// Simuler une base de données avec un Map
const blogPostsDB = new Map<string, BlogPost>();

// Initialiser quelques articles
const initialPosts: BlogPost[] = [
  {
    slug: "tendances-developpement-web-2024",
    title: "Les Tendances du Développement Web en 2024",
    date: "2024-03-15",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    excerpt: "Découvrez les technologies et pratiques qui façonnent le développement web en 2024.",
    tags: ["Tendances", "Web", "2024"],
    content: `# Les Tendances du Développement Web en 2024\n\nLe développement web évolue constamment...`
  },
  {
    slug: "optimisation-performance-web",
    title: "Guide Complet sur l'Optimisation des Performances Web",
    date: "2024-03-10",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    excerpt: "Apprenez les meilleures pratiques pour optimiser les performances de votre site web.",
    tags: ["Performance", "Optimisation", "Web Vitals"],
    content: `# Guide Complet sur l'Optimisation des Performances Web\n\nLa performance est un facteur clé...`
  }
];

// Initialiser la "base de données"
initialPosts.forEach(post => {
  blogPostsDB.set(post.slug, post);
});

export async function GET() {
  const posts = Array.from(blogPostsDB.values());
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const post: BlogPost = await request.json();
    
    if (!post.slug || !post.title || !post.content) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      );
    }

    blogPostsDB.set(post.slug, post);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'article' },
      { status: 500 }
    );
  }
}