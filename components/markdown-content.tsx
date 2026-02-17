"use client";

import { useMemo } from "react";

function parseMarkdown(markdown: string): string {
  let html = markdown;

  // Code blocks
  html = html.replace(
    /```(\w+)?\n([\s\S]*?)```/g,
    (_match, _lang, code) =>
      `<pre class="rounded-xl bg-accent p-4 overflow-x-auto my-6"><code class="font-mono text-sm text-accent-foreground">${code.trim()}</code></pre>`
  );

  // Inline code
  html = html.replace(
    /`([^`]+)`/g,
    '<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">$1</code>'
  );

  // Headers
  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="text-lg font-semibold tracking-tight mt-8 mb-4">$1</h3>'
  );
  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="text-xl font-semibold tracking-tight mt-10 mb-4">$1</h2>'
  );

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Blockquotes
  html = html.replace(
    /^> (.+)$/gm,
    '<blockquote class="border-l-2 border-border pl-4 my-4 text-muted-foreground italic">$1</blockquote>'
  );

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="underline underline-offset-4 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Ordered list items
  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<li class="ml-6 list-decimal text-muted-foreground leading-relaxed">$1</li>'
  );

  // Paragraphs (lines that aren't already wrapped)
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<") ||
        trimmed.startsWith("#")
      )
        return trimmed;
      return `<p class="text-muted-foreground leading-relaxed mb-4">${trimmed.replace(
        /\n/g,
        "<br/>"
      )}</p>`;
    })
    .join("\n");

  return html;
}

export function MarkdownContent({ content }: { content: string }) {
  const html = useMemo(() => parseMarkdown(content), [content]);

  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
