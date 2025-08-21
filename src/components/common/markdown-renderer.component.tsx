import { useEffect, useState } from "react";
import Markdown, { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

const parseImageSize = (src: string) => {
  const url = new URL(src, window.location.origin);
  const size = url.searchParams.get("size");

  let maxWidth, maxHeight: string | undefined;
  let width = "100%";

  if (size) {
    const match = size.match(/(\d*)x(\d*)/);
    if (match) {
      if (match[1]) {
        maxWidth = `${match[1]}px`;
      }
      if (match[2]) {
        maxHeight = `${match[2]}px`;
        if (!match[1]) width = "auto";
      }
    }
  }

  return { url: url.pathname, maxWidth, maxHeight, width };
};

interface MarkdownRendererProps {
  content?: string;
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const [markdownContent, setMarkdownContent] = useState<string>();

  useEffect(() => {
    fetch(`${content}/${content}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [content]);

  const components: Components = {
    code: ({ children, className }) => {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter style={dracula} PreTag="div" language={match[1]}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className}>{children}</code>
      );
    },
    img: ({ src, alt, title }) => {
      const { url, maxWidth, maxHeight, width } = parseImageSize(src as string);
      return (
        <img
          src={`${content}/${url}`}
          alt={alt}
          title={title}
          style={{
            maxWidth,
            maxHeight,
            width,
            height: "auto",
          }}
        />
      );
    },
  };

  return (
    <article className="prose dark:prose-invert mx-auto max-w-screen-lg prose-headings:border-b-1 prose-headings:border-current/25 prose-headings:pb-2.5 prose-h1:text-3xl prose-pre:bg-transparent prose-pre:p-0 prose-code:before:hidden prose-code:after:hidden prose-code:bg-code/10 dark:prose-code:bg-code prose-code:px-1 prose-code:py-0.5 prose-code:font-medium prose-code:text-sm prose-code:text-primary-200 prose-code:rounded-md">
      <div className="p-8 border-1 rounded-2xl border-current/25 bg-background-300/80 dark:bg-background-600/80">
        <Markdown remarkPlugins={[remarkGfm]} components={components}>
          {markdownContent}
        </Markdown>
      </div>
    </article>
  );
};
