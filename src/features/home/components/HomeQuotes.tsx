import { getQuotes } from "@/content/quotes/index";

export default function HomeQuotes() {
  const quotes = getQuotes();

  return (
    <section className="w-full bg-[#B8A07A] py-24">
      <div className="mx-auto max-w-[120rem] px-6 md:px-10 xl:px-12">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm uppercase tracking-[0.24em] text-[#222222]/60"
            style={{ fontFamily: '"Sora", sans-serif' }}>
            Palavras Inspiradoras
          </span>
          <h2 className="text-4xl text-[#222222] md:text-5xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Palavras para reflexão
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {quotes.map((quote, index) => (
            <div key={index}
              className="rounded-[20px] border border-[#222222]/10 bg-[#222222]/5 p-8">
              <div className="mb-6 text-4xl text-[#222222]/30">"</div>
              <p className="mb-6 text-xl leading-relaxed text-[#222222]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                {quote.text}
              </p>
              <div className="h-px w-12 bg-[#222222]/20 mb-4" />
              <span className="text-sm uppercase tracking-wider text-[#222222]/60"
                style={{ fontFamily: '"Sora", sans-serif' }}>
                {quote.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
