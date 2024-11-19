import { SectionHeader } from "@/components/section-header";
import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "./BlogCard";

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Blog"
        description="Articles et actualités sur le développement web"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}