"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import type { Article } from "@/lib/medium";

const FALLBACK_IMAGE =
  "https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png";

function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const category =
    article.categories && article.categories.length > 0
      ? article.categories[0]
      : "Article";

  const isHiddenOnDesktop = index === 9;

  return (
    <article
      className={`group bg-white border border-rule flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]${isHiddenOnDesktop ? " lg:hidden" : ""}`}
    >
      <div className="overflow-hidden aspect-[16/9] bg-[#f0eeea] relative">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
      </div>

      <div className="p-8 flex flex-col flex-grow max-md:p-6">
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold mb-4 flex items-center gap-2">
          <span className="block w-3 h-px bg-gold" />
          {category}
        </span>

        <h2 className="font-serif text-[20px] font-normal text-ink leading-[1.3] tracking-[-0.01em] mb-3 line-clamp-2">
          {article.title}
        </h2>

        <p className="text-[14px] font-light text-body-text leading-[1.7] mb-6 line-clamp-3 flex-grow">
          {article.description}
        </p>

        <div className="flex items-center justify-between pt-5 border-t border-rule mt-auto">
          <span className="text-[12px] font-light text-muted tracking-[0.04em]">
            {article.readTime} min read
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

export default function BlogGrid({ articles }: { articles: Article[] }) {
  if (!articles || articles.length === 0) {
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
