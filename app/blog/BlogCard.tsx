"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <Badge className="absolute top-4 left-4" variant="secondary">
              {post.category}
            </Badge>
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3 mb-4">
              {post.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}