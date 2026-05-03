import Link from "next/link";
import { getStudies } from "@/content/studies/index";

export default function HomeStudies() {
  const studies = getStudies().slice(0, 4);

  return (
    <section className="w-full bg-[#F8F8F8] py-24">
      <div className="mx-auto max-w-[120rem] px-6 md:px-10 xl:px-12">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-sm uppercase tracking-[0.24em] text-[#B8A07A]"
              style={{ fontFamily: '"Sora", sans-serif' }}>
              Aprofunde sua fé
            </span>
            <h2 className="text-4xl text-[#222222] md:text-5xl"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Estudos em destaque
            </h2>
          </div>
          <Link href="/studies"
            className="inline-flex items-center rounded-full border border-[#222222] px-6 py-3 text-sm text-[#222222] transition hover:bg-[#222222] hover:text-white"
            style={{ fontFamily: '"Sora", sans-serif' }}>
            Ver todos os estudos →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {studies.map((study) => (
            <Link key={study.slug} href={`/studies/${study.slug}`}
              className="group flex items-start gap-6 rounded-[20px] border border-gray-200 bg-white p-6 transition hover:border-[#B8A07A]/40 hover:shadow-md">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#B8A07A]/10 text-2xl">
                📖
              </div>
              <div>
                <span className="mb-1 block text-xs uppercase tracking-wider text-[#B8A07A]"
                  style={{ fontFamily: '"Sora", sans-serif' }}>
                  {study.category || "Estudo Bíblico"}
                </span>
                <h3 className="mb-2 text-xl text-[#222222] transition group-hover:text-[#B8A07A]"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  {study.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4A4A4A]"
                  style={{ fontFamily: '"Sora", sans-serif' }}>
                  {study.excerpt || study.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
