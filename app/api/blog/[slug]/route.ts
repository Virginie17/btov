import { NextResponse } from 'next/server';
import { BlogPost } from '@/lib/blog-data';

const blogPostsDB = new Map<string, BlogPost>();

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = blogPostsDB.get(params.slug);
  
  if (!post) {
    return NextResponse.json(
      { error: 'Article non trouvé' },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post: BlogPost = await request.json();
    
    if (!blogPostsDB.has(params.slug)) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    blogPostsDB.set(params.slug, { ...post, slug: params.slug });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  if (!blogPostsDB.has(params.slug)) {
    return NextResponse.json(
      { error: 'Article non trouvé' },
      { status: 404 }
    );
  }

  blogPostsDB.delete(params.slug);
  return new NextResponse(null, { status: 204 });
}