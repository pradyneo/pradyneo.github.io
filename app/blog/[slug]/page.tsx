import { notFound } from "next/navigation";
import Link from "next/link";
import { FloatingWidget } from "@/components/floating-widget";
import { MarkdownContent } from "@/components/markdown-content";
import { Footer } from "@/components/footer";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { ArrowLeft, Clock, Folder } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Prady Neog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <Folder className="h-3 w-3" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {post.title}
          </h1>

          <p className="mt-3 text-sm text-muted-foreground">{post.date}</p>

          <FloatingWidget className="mt-10">
            <MarkdownContent content={post.content} />
          </FloatingWidget>
        </div>
      </article>
      <Footer />
    </>
  );
}
