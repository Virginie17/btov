import { BlogPost } from './blog-data';

const API_URL = '/api/blog';

export async function getAllPosts(): Promise<BlogPost[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des articles');
  }
  return response.json();
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const response = await fetch(`${API_URL}/${slug}`);
  if (!response.ok) {
    throw new Error('Article non trouvé');
  }
  return response.json();
}

export async function createPost(post: BlogPost): Promise<BlogPost> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la création de l\'article');
  }
  return response.json();
}

export async function updatePost(slug: string, post: BlogPost): Promise<BlogPost> {
  const response = await fetch(`${API_URL}/${slug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la mise à jour de l\'article');
  }
  return response.json();
}

export async function deletePost(slug: string): Promise<void> {
  const response = await fetch(`${API_URL}/${slug}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la suppression de l\'article');
  }
}