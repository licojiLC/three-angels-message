import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#222222] text-white">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#B8A07A]/50" />
          <span className="text-sm uppercase tracking-[0.24em] text-[#B8A07A]"
            style={{ fontFamily: '"Sora", sans-serif' }}>
            Voz Profética Global
          </span>
          <div className="h-px w-12 bg-[#B8A07A]/50" />
        </div>

        <h1 className="mb-6 text-5xl leading-tight md:text-7xl"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}>
          Uma plataforma <br />
          <span className="italic text-[#B8A07A]">missionária digital</span>
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-gray-300"
          style={{ fontFamily: '"Sora", sans-serif' }}>
          Proclamando a verdade bíblica ao mundo — estudos, livros, reflexões e a mensagem profética para este tempo.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/studies"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-[#B8A07A] px-8 py-4 text-[#222222] transition hover:bg-[#a78962]"
            style={{ fontFamily: '"Sora", sans-serif' }}>
            Estudos Bíblicos
          </Link>
          <Link href="/blog"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/20 px-8 py-4 text-white transition hover:bg-white hover:text-[#222222]"
            style={{ fontFamily: '"Sora", sans-serif' }}>
            Explorar Artigos
          </Link>
        </div>
      </div>
    </section>
  );
}
