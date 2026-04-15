export const IMAGE_DOMAINS = [
  "authors",
  "books",
  "blog",
  "banners",
  "church",
  "heroes",
  "devotionals",
  "testimonies",
  "team",
  "social-share",
  "og",
  "icons",
  "logos",
] as const;

export type ImageDomain = (typeof IMAGE_DOMAINS)[number];

export const IMAGE_SIZES = {
  avatar: { width: 80, height: 80 },
  bookCover: { width: 320, height: 480 },
  blogCard: { width: 640, height: 360 },
  banner: { width: 1440, height: 450 },
  hero: { width: 1920, height: 600 },
  og: { width: 1200, height: 630 },
  thumbnail: { width: 160, height: 90 },
} as const;

// Futuramente: troque BASE_URL pela URL do CDN/S3
export const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? "";

export function getImagePath(domain: ImageDomain, filename: string): string {
  if (IMAGE_BASE_URL) return `${IMAGE_BASE_URL}/${domain}/${filename}`;
  return `/images/${domain}/${filename}`;
}
