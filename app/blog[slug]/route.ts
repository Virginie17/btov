import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/blog-data';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return NextResponse.json(
      { error: 'Article non trouvé' },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}
