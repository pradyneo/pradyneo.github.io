import Link from "next/link";
import { FloatingWidget } from "@/components/floating-widget";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/posts";
import { ArrowUpRight, Clock, Folder } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Prady Neog",
  description:
    "Technical blog posts about Unix, terminal tools, and developer tips.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Writing
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Short, useful posts about things I learn along the way.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <FloatingWidget className="transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                          <Folder className="h-3 w-3" />
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-muted-foreground md:text-xl">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-xs text-muted-foreground">
                        {post.date}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                </FloatingWidget>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
