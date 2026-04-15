import Link from "next/link";
import { getArticles } from "@/content/blog/articles";
import { books } from "@/content/books/books";
import OptimizedImage, {
  HeroImage,
  BlogCover,
  BookCover,
} from "@/components/ui/optimized-image";

const featuredArticles = getArticles().slice(0, 3);
const featuredBooks = books.slice(0, 3);

const dailyVerse = {
  verseText:
    "E este evangelho do reino será pregado em todo o mundo, em testemunho a todas as nações, e então virá o fim.",
  bibleReference: "Mateus 24:14",
  reflectionText:
    "A missão ainda está viva. Cada artigo, estudo e livro partilhado pode ser um instrumento para preparar pessoas para o breve retorno de Cristo.",
  backgroundImage:
    "https://static.wixstatic.com/media/c87fc3_130eda5c5cd548658cd2d39d442af9d7~mv2.png",
};

function formatDate(date?: string) {
  if (!date) return "Recente";
  try {
    return new Date(date).toLocaleDateString("pt-BR");
  } catch {
    return "Recente";
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F8F8] text-[#333333]">
      <style>{`
        .text-stroke-gold {
          -webkit-text-stroke: 1px #B8A07A;
          color: transparent;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .premium-link { position: relative; }
        .premium-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0.4);
          transform-origin: left;
          opacity: 0;
          transition: transform 220ms ease, opacity 220ms ease;
        }
        .premium-link:hover::after { transform: scaleX(1); opacity: 1; }
        .hero-fade {
          background:
            radial-gradient(circle at 50% 20%, rgba(184,160,122,0.22), transparent 26%),
            linear-gradient(to bottom, rgba(34,34,34,0.15), rgba(34,34,34,0.7));
        }
        .gold-ring { box-shadow: 0 0 0 1px rgba(184,160,122,0.28); }
        .card-lift { transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease; }
        .card-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(17,17,17,0.14);
          border-color: rgba(184,160,122,0.28);
        }
        .image-zoom img { transition: transform 700ms ease; }
        .image-zoom:hover img { transform: scale(1.05); }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[96vh] items-center justify-center overflow-hidden bg-[#222222]">
        <div className="absolute inset-0 z-0 opacity-40">
          {/* HeroImage → domain="heroes", priority=true, eager */}
          <HeroImage
            src="https://static.wixstatic.com/media/c87fc3_3af72e5dad0f4c7593cb5d7a39acdd83~mv2.png"
            alt="Atmosfera"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-fade absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#222222]/75 via-[#222222]/35 to-[#222222]" />
        </div>

        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-20 mx-auto flex w-full max-w-[120rem] flex-col items-center px-6 text-center md:px-10 xl:px-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-[#B8A07A]/50" />
            <span className="text-sm uppercase tracking-[0.24em] text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Voz Profética Global
            </span>
            <div className="h-px w-12 bg-[#B8A07A]/50" />
          </div>

          <h1 className="mb-8 max-w-6xl text-6xl leading-[0.88] text-[#F8F8F8] md:text-8xl xl:text-9xl" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Três Mensagens <br />
            <span className="italic text-[#B8A07A]">Angélicas</span>
          </h1>

          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl" style={{ fontFamily: '"Sora", sans-serif' }}>
            Um portal dedicado à proclamação do evangelho eterno, à restauração da verdade bíblica
            e à preparação de um povo para o breve retorno de nosso Senhor Jesus Cristo.
          </p>

          <div className="flex w-full flex-col justify-center gap-5 sm:flex-row">
            <Link href="/studies" className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#B8A07A] px-10 py-5 text-lg text-[#222222] transition hover:bg-[#a78962]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Estudos Bíblicos
            </Link>
            <Link href="/blog" className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 px-10 py-5 text-lg text-white transition hover:bg-white hover:text-[#222222]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Explorar Artigos
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.28em] text-white/40" style={{ fontFamily: '"Sora", sans-serif' }}>
            Role para descobrir
          </span>
          <div className="h-16 w-px bg-gradient-to-b from-[#B8A07A] to-transparent" />
        </div>
      </section>

      {/* ── VERSÍCULO DO DIA ──────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#F8F8F8] py-24 md:py-32">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="mx-auto max-w-[120rem] px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">

            <div className="relative lg:col-span-5">
              <div className="relative z-10">
                {/* OptimizedImage genérico — URL externa, sem domain */}
                <div className="gold-ring relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                  <div className="absolute inset-0 z-10 bg-[#B8A07A]/10 mix-blend-multiply" />
                  <OptimizedImage
                    src={dailyVerse.backgroundImage}
                    alt="Versículo do dia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -left-6 -top-6 -z-10 h-full w-full border border-[#B8A07A]/30" />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-16">
              <div className="mb-8 flex items-center gap-4">
                <span className="text-[#B8A07A]">♥</span>
                <span className="text-sm uppercase tracking-[0.24em] text-[#4A4A4A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  Versículo do Dia
                </span>
              </div>

              <h2 className="mb-8 text-4xl leading-tight text-[#222222] md:text-5xl xl:text-6xl" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                "{dailyVerse.verseText}"
              </h2>

              <div className="flex flex-col gap-6 border-t border-gray-200 pt-8 md:flex-row md:items-center md:gap-12">
                <div>
                  <span className="mb-1 block text-2xl text-[#B8A07A]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    {dailyVerse.bibleReference}
                  </span>
                  <span className="text-sm text-gray-500" style={{ fontFamily: '"Sora", sans-serif' }}>
                    Referência Bíblica
                  </span>
                </div>
                <div className="max-w-md md:border-l md:border-gray-200 md:pl-12">
                  <p className="leading-relaxed text-[#4A4A4A] italic" style={{ fontFamily: '"Sora", sans-serif' }}>
                    {dailyVerse.reflectionText}
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/verse-of-day" className="premium-link inline-flex items-center text-lg text-[#222222] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  Ler reflexão completa <span className="ml-3">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ATALAIA DA VERDADE ────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#222222] py-32 text-[#F8F8F8]">
        <div className="bg-noise absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-[120rem] px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-5xl leading-none md:text-7xl" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Atalaia da <br />
                <span className="text-stroke-gold">Verdade</span>
              </h2>
              <p className="mb-12 max-w-xl text-xl leading-relaxed text-gray-400" style={{ fontFamily: '"Sora", sans-serif' }}>
                No coração de Angola, Três Mensagens Angélicas nasce como uma resposta ao chamado
                bíblico para levantar a verdade, fortalecer a fé e anunciar o tempo solene em que vivemos.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="rounded-full border border-white/10 p-4">
                    <span className="text-[#B8A07A]">⚓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      Fundamento Sólido
                    </h3>
                    <p className="leading-relaxed text-gray-500" style={{ fontFamily: '"Sora", sans-serif' }}>
                      Conteúdo fundamentado na Palavra de Deus, com reverência, clareza doutrinária e compromisso com a verdade bíblica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="rounded-full border border-white/10 p-4">
                    <span className="text-[#B8A07A]">🛡</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      Missão Digital
                    </h3>
                    <p className="leading-relaxed text-gray-500" style={{ fontFamily: '"Sora", sans-serif' }}>
                      Uma plataforma criada para alcançar pessoas com estudos, artigos, livros e recursos espirituais em ambiente moderno e acessível.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <Link href="/three-angels-message" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[#222222] transition hover:bg-[#B8A07A] hover:text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
                  Entender a Mensagem
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-8 pt-12 lg:pt-0">
              {/* Card 1 — URL externa */}
              <div className="image-zoom card-lift relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10">
                <OptimizedImage
                  src="https://static.wixstatic.com/media/c87fc3_8852073a61fb474daffbeb20512cd02a~mv2.png"
                  alt="Estudos Proféticos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover opacity-80 hover:opacity-100"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
                  <span className="text-2xl text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    Estudos Proféticos
                  </span>
                </div>
              </div>

              {/* Card 2 — URL externa */}
              <div className="image-zoom card-lift relative ml-0 aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 lg:ml-12">
                <OptimizedImage
                  src="https://static.wixstatic.com/media/c87fc3_fa69aebd39ac4c32b3f1c20d27887dda~mv2.png"
                  alt="Fé e Sociedade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover opacity-80 hover:opacity-100"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
                  <span className="text-2xl text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    Fé e Sociedade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F8F8F8] py-32">
        <div className="mx-auto max-w-[120rem] px-6 md:px-10 xl:px-12">
          <div className="mb-20 flex flex-col items-end justify-between border-b border-gray-200 pb-8 md:flex-row">
            <div>
              <span className="mb-4 block text-sm uppercase tracking-[0.24em] text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                Atualizações Recentes
              </span>
              <h2 className="text-5xl text-[#222222] md:text-6xl" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Fé e Sociedade
              </h2>
            </div>
            <Link href="/blog" className="hidden rounded-full border border-[#222222] px-8 py-4 text-[#222222] transition hover:bg-[#222222] hover:text-white md:inline-flex" style={{ fontFamily: '"Sora", sans-serif' }}>
              Ver Todos os Artigos
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <article key={article.slug} className="group flex h-full flex-col">
                <Link href={`/blog/${article.slug}`} className="image-zoom mb-6 block overflow-hidden rounded-[24px]">
                  <div className="card-lift relative aspect-[16/10] overflow-hidden border border-black/5 bg-gray-100">
                    <div className="absolute inset-0 z-10 bg-[#222222]/0 transition-colors duration-500 group-hover:bg-[#222222]/10" />
                    {/* BlogCover → domain="blog", aspectRatio="video" */}
                    <BlogCover
                      src={article.cover || "cover-1.webp"}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="flex flex-grow flex-col">
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-xs uppercase tracking-wider text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                      {article.category || "Geral"}
                    </span>
                    <span className="text-xs text-gray-400" style={{ fontFamily: '"Sora", sans-serif' }}>
                      {formatDate(article.date)}
                    </span>
                  </div>

                  <h3 className="mb-4 text-3xl leading-tight text-[#222222] transition-colors group-hover:text-[#B8A07A]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>

                  <p className="line-clamp-3 mb-6 flex-grow leading-relaxed text-[#4A4A4A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                    {article.excerpt}
                  </p>

                  <Link href={`/blog/${article.slug}`} className="premium-link mt-auto inline-flex items-center text-sm text-[#222222] transition-colors group-hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                    Ler Artigo <span className="ml-1">›</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link href="/blog" className="inline-flex w-full items-center justify-center rounded-full border border-[#222222] py-5 text-[#222222] transition hover:bg-[#222222] hover:text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
              Ver Todos os Artigos
            </Link>
          </div>
        </div>
      </section>

      {/* ── BIBLIOTECA ───────────────────────────────────────────── */}
      <section className="w-full overflow-hidden bg-[#222222] py-32 text-[#F8F8F8]">
        <div className="mx-auto max-w-[120rem] px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="mb-8 text-5xl text-[#B8A07A]">📚</div>
              <h2 className="mb-6 text-5xl md:text-6xl" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Biblioteca Digital
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-400" style={{ fontFamily: '"Sora", sans-serif' }}>
                Acesse gratuitamente obras fundamentais para o crescimento espiritual, profecia, vida cristã e formação doutrinária.
              </p>
              <Link href="/books" className="inline-flex w-full items-center justify-center rounded-full bg-[#B8A07A] px-8 py-4 text-[#222222] transition hover:bg-white hover:text-[#222222] md:w-auto" style={{ fontFamily: '"Sora", sans-serif' }}>
                Acessar Acervo Completo
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {featuredBooks.map((book, index) => (
                  <div
                    key={book.id}
                    className={`${index === 2 ? "md:col-span-2 md:flex md:items-center md:gap-8" : ""} card-lift group relative rounded-[24px] border border-white/10 bg-white/5 p-8`}
                  >
                    <div className={`relative mb-6 shadow-2xl ${index === 2 ? "md:mb-0 md:w-1/3" : ""}`}>
                      <div className="overflow-hidden rounded-[18px] bg-gray-800">
                        {/* BookCover → domain="books", aspectRatio="portrait" */}
                        <BookCover
                          src={book.cover || "caminho-a-cristo.webp"}
                          alt={book.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="opacity-90 transition-opacity group-hover:opacity-100"
                        />
                      </div>
                    </div>

                    <div className={index === 2 ? "md:w-2/3" : ""}>
                      <span className="mb-2 block text-xs uppercase tracking-wider text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                        {book.category || "Literatura Cristã"}
                      </span>
                      <h3 className="mb-2 text-2xl text-white transition-colors group-hover:text-[#B8A07A]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        {book.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-400" style={{ fontFamily: '"Sora", sans-serif' }}>
                        {book.author}
                      </p>
                      <p className="line-clamp-3 mb-6 text-sm leading-relaxed text-gray-500" style={{ fontFamily: '"Sora", sans-serif' }}>
                        {book.description}
                      </p>
                      <Link href={`/books/${book.slug}`} className="premium-link inline-flex items-center border-b border-white/30 pb-1 text-sm text-white transition-colors hover:border-[#B8A07A] hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                        Detalhes da Obra
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#B8A07A] py-32">
        <div className="absolute inset-0 opacity-10 mix-blend-multiply [background-image:url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 text-6xl text-[#222222]">✝</div>
          <h2 className="mb-8 text-5xl leading-tight text-[#222222] md:text-7xl" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Prepare-se para o retorno de Cristo
          </h2>
          <p className="mb-12 text-xl leading-relaxed text-[#222222]/80" style={{ fontFamily: '"Sora", sans-serif' }}>
            Junte-se a nós nesta jornada de fé, estudo, oração e missão.
          </p>
          <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-full bg-[#222222] py-5 text-lg text-white transition hover:bg-[#111111]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Entrar em Contato
            </Link>
          </div>
          <div className="mt-12 flex justify-center gap-8 text-sm uppercase tracking-[0.24em] text-[#222222]/60" style={{ fontFamily: '"Sora", sans-serif' }}>
            <span>Estudo</span>
            <span>Oração</span>
            <span>Missão</span>
          </div>
        </div>
      </section>

      {/* ── APOIO ────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden border-t border-gray-200 bg-[#F8F8F8] py-32">
        <div className="mx-auto max-w-[120rem] px-6 md:px-10 xl:px-12">
          <div className="mb-20 text-center">
            <span className="mb-4 block text-sm uppercase tracking-[0.24em] text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Apoie Nossa Missão
            </span>
            <h2 className="mb-6 text-5xl text-[#222222] md:text-6xl" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Apoio
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Sua contribuição nos ajuda a continuar proclamando o evangelho eterno e alcançando mais pessoas com a mensagem de esperança.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-12 md:grid-cols-2">
            <div className="card-lift rounded-[24px] border border-gray-200 bg-white p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-full bg-[#B8A07A]/10 p-3">
                  <span className="text-[#B8A07A]">♥</span>
                </div>
                <h3 className="text-2xl text-[#222222]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  PayPal
                </h3>
              </div>
              <p className="mb-6 leading-relaxed text-[#4A4A4A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                Faça sua doação via PayPal de forma segura e rápida.
              </p>
              <div className="mb-6 rounded border border-gray-100 bg-gray-50 p-4">
                <p className="break-all text-sm text-gray-600" style={{ fontFamily: '"Sora", sans-serif' }}>
                  eliaslicojicacoma@gmail.com
                </p>
              </div>
              <a href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-[#B8A07A] py-4 text-[#222222] transition hover:bg-[#a78962]" style={{ fontFamily: '"Sora", sans-serif' }}>
                Doar via PayPal
              </a>
            </div>

            <div className="card-lift rounded-[24px] border border-gray-200 bg-white p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-full bg-[#B8A07A]/10 p-3">
                  <span className="text-[#B8A07A]">♥</span>
                </div>
                <h3 className="text-2xl text-[#222222]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  Pix
                </h3>
              </div>
              <p className="mb-6 leading-relaxed text-[#4A4A4A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                Transfira sua doação instantaneamente via Pix.
              </p>
              <div className="mb-6 rounded border border-gray-100 bg-gray-50 p-4">
                <p className="break-all text-sm text-gray-600" style={{ fontFamily: '"Sora", sans-serif' }}>
                  elias-licoji-cacoma-273@jim.com
                </p>
              </div>
              <button type="button" className="inline-flex w-full items-center justify-center rounded-full border border-[#B8A07A] py-4 text-[#B8A07A] transition hover:bg-[#B8A07A] hover:text-[#222222]" style={{ fontFamily: '"Sora", sans-serif' }}>
                Copiar Chave Pix
              </button>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4A4A4A]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Toda contribuição, por menor que seja, faz diferença na expansão de nossa missão. Agradecemos sinceramente seu apoio e suas orações.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
