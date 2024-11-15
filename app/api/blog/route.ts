import { NextResponse } from 'next/server';
import { BlogPost } from '@/lib/blog-data';

// Simuler une base de données avec un Map
const blogPostsDB = new Map<string, BlogPost>();

// Initialiser quelques articles
const initialPosts: BlogPost[] = [
  {
    slug: "impact-ia-developpement-web",
    title: "L'Impact de l'IA dans le Développement Web Moderne",
    description: "Découvrez comment l'intelligence artificielle révolutionne le développement web avec les outils de génération de code, l'assistance au développement et l'optimisation automatique.",
    date: "2024-01-15",
    category: "Tendances",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    content: "Contenu détaillé de l'article sur l'IA..."
  },
  {
    slug: "nextjs-14-nouveautes",
    title: "Next.js 14 : Les Nouvelles Fonctionnalités à Connaître",
    description: "Exploration des dernières fonctionnalités de Next.js 14 : Server Actions, Partial Prerendering et améliorations des performances.",
    date: "2024-01-10",
    category: "Framework",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
    content: "Contenu détaillé sur Next.js 14..."
  },
  {
    slug: "web3-avenir-developpement",
    title: "Le Web3 et l'Avenir du Développement",
    description: "Comment la blockchain et les technologies décentralisées transforment l'approche du développement web moderne.",
    date: "2024-01-05",
    category: "Innovation",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    content: "Contenu détaillé sur le Web3..."
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