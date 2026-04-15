"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ImageDomain =
  | "authors"
  | "books"
  | "blog"
  | "banners"
  | "church"
  | "heroes"
  | "devotionals"
  | "testimonies"
  | "team"
  | "social-share"
  | "og"
  | "icons"
  | "logos";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  domain?: ImageDomain;
  fallbackSrc?: string;
  showSkeleton?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "banner" | "auto";
}

const ASPECT_RATIO_CLASSES = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  banner: "aspect-[16/5]",
  auto: "",
};

function buildSrc(src: string, domain?: ImageDomain): string {
  if (src.startsWith("http") || src.startsWith("/")) return src;
  if (domain) return `/images/${domain}/${src}`;
  return `/images/${src}`;
}

export function OptimizedImage({
  src,
  domain,
  fallbackSrc = "/images/og/default.jpg",
  showSkeleton = true,
  aspectRatio = "auto",
  alt,
  className,
  fill,
  width,
  height,
  priority,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const resolvedSrc = buildSrc(hasError ? fallbackSrc : src, hasError ? undefined : domain);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        ASPECT_RATIO_CLASSES[aspectRatio],
        className
      )}
    >
      {/* Skeleton enquanto carrega */}
      {showSkeleton && isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#F6F4EF] via-[#e8e4da] to-[#F6F4EF] bg-[length:200%_100%]" />
      )}

      <Image
        src={resolvedSrc}
        alt={alt}
        fill={fill ?? !width}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "object-cover transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        {...props}
      />
    </div>
  );
}

// ── Variantes semânticas ──────────────────────────────────────────

export function BookCover(props: Omit<OptimizedImageProps, "domain" | "aspectRatio">) {
  return <OptimizedImage {...props} domain="books" aspectRatio="portrait" />;
}

export function BlogCover(props: Omit<OptimizedImageProps, "domain" | "aspectRatio">) {
  return <OptimizedImage {...props} domain="blog" aspectRatio="video" />;
}

export function AuthorAvatar(props: Omit<OptimizedImageProps, "domain" | "aspectRatio">) {
  return <OptimizedImage {...props} domain="authors" aspectRatio="square" />;
}

export function BannerImage(props: Omit<OptimizedImageProps, "domain" | "aspectRatio">) {
  return <OptimizedImage {...props} domain="banners" aspectRatio="banner" />;
}

export function HeroImage(props: Omit<OptimizedImageProps, "domain" | "aspectRatio">) {
  return <OptimizedImage {...props} domain="heroes" aspectRatio="video" priority />;
}

export function DevotionalImage(props: Omit<OptimizedImageProps, "domain" | "aspectRatio">) {
  return <OptimizedImage {...props} domain="devotionals" aspectRatio="video" />;
}

export function TestimonyImage(props: Omit<OptimizedImageProps, "domain" | "aspectRatio">) {
  return <OptimizedImage {...props} domain="testimonies" aspectRatio="square" />;
}

export default OptimizedImage;
