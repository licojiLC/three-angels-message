import { ImageDomain, getImagePath } from "@/config/images";

/** Gera src seguro para qualquer domínio */
export function resolveImage(domain: ImageDomain, filename: string): string {
  return getImagePath(domain, filename);
}

/** Gera blur placeholder base64 com a cor do design system */
export function getBlurDataURL(color = "#E8E4DA"): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8">
      <rect width="8" height="8" fill="${color}"/>
    </svg>`;
  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

/** Verifica se a string é uma URL externa */
export function isExternalUrl(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}

/** Converte nome de arquivo em alt text legível */
export function filenameToAlt(filename: string): string {
  return filename
    .replace(/\.[^/.]+$/, "")   // remove extensão
    .replace(/[-_]/g, " ")       // hífens/underscores → espaço
    .replace(/\b\w/g, (c) => c.toUpperCase()); // Title Case
}
