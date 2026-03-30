"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

interface Article {
  title: string;
  link: string;
  thumbnail: string;
  content: string;
  categories: string[];
  pubDate: string;
}

const MEDIUM_USERNAME = "sachhsoft";
const MAX_ARTICLES = 10;
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;
const FALLBACK_IMAGE =
  "https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png";

function extractImage(content: string, thumbnail: string): string {
  if (thumbnail && thumbnail.length > 0) return thumbnail;
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : FALLBACK_IMAGE;
}

function extractDescription(content: string): string {
  const div = document.createElement("div");
  div.innerHTML = content;
  const text = div.textContent || div.innerText || "";
  return text.substring(0, 150).trim() + "...";
}

function calculateReadTime(content: string): number {
  const div = document.createElement("div");
  div.innerHTML = content;
  const text = div.textContent || div.innerText || "";
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function extractCategory(categories: string[]): string {
  return categories && categories.length > 0 ? categories[0] : "Article";
}

function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const image = extractImage(article.content, article.thumbnail);
  const description = extractDescription(article.content);
  const readTime = calculateReadTime(article.content);
  const category = extractCategory(article.categories);

  // On desktop (3-col), 10 items = 3 full rows of 3 + 1 orphan — hide the 10th
  const isHiddenOnDesktop = index === 9;

  return (
    <article
      className={`group bg-white border border-rule flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]${isHiddenOnDesktop ? " lg:hidden" : ""}`}
    >
      {/* Image */}
      <div className="overflow-hidden aspect-[16/9] bg-[#f0eeea]">
        <img
          src={image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow max-md:p-6">
        {/* Category */}
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold mb-4 flex items-center gap-2">
          <span className="block w-3 h-px bg-gold" />
          {category}
        </span>

        {/* Title */}
        <h2 className="font-serif text-[20px] font-normal text-ink leading-[1.3] tracking-[-0.01em] mb-3 line-clamp-2">
          {article.title}
        </h2>

        {/* Description */}
        <p className="text-[14px] font-light text-body-text leading-[1.7] mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-rule mt-auto">
          <span className="text-[12px] font-light text-muted tracking-[0.04em]">
            {readTime} min read
          </span>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.1em] uppercase text-ink no-underline transition-all duration-200 hover:text-gold hover:gap-3"
          >
            Read Article
            <ArrowRight size={13} strokeWidth={2} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function BlogGrid() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    fetch(RSS_URL)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "ok" && data.items?.length > 0) {
          setArticles(data.items.slice(0, MAX_ARTICLES));
          setStatus("ok");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") {
    return (
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="bg-white border border-rule aspect-[3/4] animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center py-20">
        <p className="text-[16px] font-light text-muted">
          Unable to load articles. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <StaggerContainer className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
      {articles.map((article, i) => (
        <StaggerItem key={article.link}>
          <ArticleCard article={article} index={i} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
