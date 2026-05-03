import Link from "next/link";

const sections = [
  { title: "Artigos", description: "Gerir artigos do blog", href: "/admin/articles", icon: "📝", color: "bg-blue-50 border-blue-200" },
  { title: "Livros", description: "Gerir biblioteca digital", href: "/admin/books", icon: "📚", color: "bg-amber-50 border-amber-200" },
  { title: "Estudos", description: "Gerir estudos bíblicos", href: "/admin/studies", icon: "📖", color: "bg-green-50 border-green-200" },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <header className="border-b border-gray-200 bg-white px-8 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✝</span>
            <div>
              <h1 className="text-xl text-[#222222]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Three Angels Message
              </h1>
              <p className="text-xs text-gray-500" style={{ fontFamily: "Sora, sans-serif" }}>
                Painel de Administração
              </p>
            </div>
          </div>
          <Link
            href="/api/admin/logout"
            className="rounded-full border border-gray-200 px-5 py-2 text-sm text-gray-500 transition hover:bg-gray-100"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Sair
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-8 py-12">
        <h2 className="mb-8 text-3xl text-[#222222]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          O que queres gerir hoje?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={"group rounded-[20px] border p-8 transition hover:shadow-md " + s.color}
            >
              <div className="mb-4 text-4xl">{s.icon}</div>
              <h3 className="mb-2 text-2xl text-[#222222]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {s.title}
              </h3>
              <p className="text-sm text-gray-500" style={{ fontFamily: "Sora, sans-serif" }}>
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
