import { useEffect, useState } from "react";
import Markdown, { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content?: string;
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const [markdownContent, setMarkdownContent] = useState<string>();

  useEffect(() => {
    fetch(`${content}`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [content]);

  const components: Components = {
    code({ children, className }) {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter style={dracula} PreTag="div" language={match[1]}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className}>{children}</code>
      );
    },
  };

  return (
    <article className="prose dark:prose-invert mx-auto max-w-screen-lg prose-headings:border-b-1 prose-headings:border-current/25 prose-headings:pb-2.5 prose-h1:text-3xl prose-pre:bg-transparent prose-pre:p-0 prose-code:before:hidden prose-code:after:hidden prose-code:bg-gray-200 dark:prose-code:bg-gray-700 prose-code:px-1.5 py-1 prose-code:rounded prose-code:font-medium prose-code:text-sm prose-code:text-primary-200">
      <div className="p-8 border-1 rounded-lg border-current/25">
        <Markdown remarkPlugins={[remarkGfm]} components={components}>
          {markdownContent}
        </Markdown>
      </div>
    </article>
  );
};
