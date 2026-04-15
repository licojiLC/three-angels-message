import { useMemo } from "react";
import { ImageDomain, getImagePath, IMAGE_SIZES } from "@/config/images";
import { filenameToAlt } from "@/lib/image";

interface UseImageOptions {
  domain: ImageDomain;
  filename: string;
  altOverride?: string;
}

export function useImage({ domain, filename, altOverride }: UseImageOptions) {
  return useMemo(
    () => ({
      src: getImagePath(domain, filename),
      alt: altOverride ?? filenameToAlt(filename),
    }),
    [domain, filename, altOverride]
  );
}

export function useBookCover(filename: string) {
  return useImage({ domain: "books", filename });
}

export function useBlogCover(filename: string) {
  return useImage({ domain: "blog", filename });
}

export function useAuthorAvatar(filename: string) {
  return useImage({ domain: "authors", filename });
}

export { IMAGE_SIZES };
