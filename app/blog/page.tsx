"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { BlogCard } from "@/components/blog-card";
import { BlogPost } from "@/lib/blog-data";
import { getAllPosts } from "@/lib/blog-service";
import { Loader2 } from "lucide-react";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError("Erreur lors du chargement des articles");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Blog"
        description="Découvrez nos derniers articles sur le développement web et les tendances technologiques"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}