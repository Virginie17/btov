"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('fr-FR', { 
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
          </div>
          <CardTitle className="line-clamp-2 hover:text-primary">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 line-clamp-3 text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}