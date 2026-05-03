import Link from "next/link";
import { books } from "@/content/books/books";
import { BookCover } from "@/components/ui/optimized-image";

const featuredBooks = books.slice(0, 3);

export default function HomeBooks() {
  return (
    <section className="w-full bg-[#222222] py-24 text-white">
      <div className="mx-auto max-w-[120rem] px-6 md:px-10 xl:px-12">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-sm uppercase tracking-[0.24em] text-[#B8A07A]"
              style={{ fontFamily: '"Sora", sans-serif' }}>
              Biblioteca Digital
            </span>
            <h2 className="text-4xl md:text-5xl"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Leituras recomendadas
            </h2>
          </div>
          <Link href="/books"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-[#222222]"
            style={{ fontFamily: '"Sora", sans-serif' }}>
            Ver acervo completo →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.slug}`}
              className="group rounded-[20px] border border-white/10 bg-white/5 p-6 transition hover:border-[#B8A07A]/40 hover:bg-white/10">
              <div className="relative mb-5 aspect-[2/3] overflow-hidden rounded-[12px]">
                <BookCover
                  src={book.cover || "caminho-a-cristo.webp"}
                  alt={book.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                />
              </div>
              <span className="mb-1 block text-xs uppercase tracking-wider text-[#B8A07A]"
                style={{ fontFamily: '"Sora", sans-serif' }}>
                {book.category || "Literatura Cristã"}
              </span>
              <h3 className="mb-1 text-xl text-white transition group-hover:text-[#B8A07A]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                {book.title}
              </h3>
              <p className="text-sm text-gray-400" style={{ fontFamily: '"Sora", sans-serif' }}>
                {book.author}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
