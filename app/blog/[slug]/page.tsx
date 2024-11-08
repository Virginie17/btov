"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { BlogPost } from "@/lib/blog-data";
import { getPostBySlug } from "@/lib/blog-service";
import { Badge } from "@/components/ui/badge";
import { Calendar, Loader2 } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostBySlug(params.slug);
        setPost(fetchedPost);
      } catch (err) {
        setError("Article non trouvé");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center space-x-2 text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <h1 className="mb-8 text-4xl font-bold">{post.title}</h1>

          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </motion.div>
    </article>
  );
}