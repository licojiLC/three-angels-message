import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getArticles } from "@/content/blog/articles";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") ?? "10");
    const page = parseInt(searchParams.get("page") ?? "1");
    const skip = (page - 1) * limit;

    const where = {
      published: true,
      ...(category ? { category } : {}),
    };

    const [items, total] = await Promise.all([
      prisma.article.findMany({ where, orderBy: { publishedAt: "desc" }, skip, take: limit }),
      prisma.article.count({ where }),
    ]);

    // fallback para conteudo estatico se base de dados vazia
    if (items.length === 0) {
      const static_articles = getArticles().slice(skip, skip + limit);
      return NextResponse.json({ data: static_articles, total: static_articles.length, page, limit, source: "static" });
    }

    return NextResponse.json({ data: items, total, page, limit, source: "database" });
  } catch {
    const static_articles = getArticles();
    return NextResponse.json({ data: static_articles, total: static_articles.length, page: 1, limit: 10, source: "static" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const article = await prisma.article.create({
      data: {
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        cover: body.cover,
        category: body.category,
        published: body.published ?? false,
        publishedAt: body.published ? new Date() : null,
      },
    });
    return NextResponse.json({ data: article }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar artigo" }, { status: 500 });
  }
}
