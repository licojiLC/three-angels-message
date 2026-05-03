import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { books as staticBooks } from "@/content/books/books";

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
      prisma.book.findMany({ where, orderBy: { createdAt: "desc" }, skip, take: limit }),
      prisma.book.count({ where }),
    ]);

    if (items.length === 0) {
      const data = staticBooks.slice(skip, skip + limit);
      return NextResponse.json({ data, total: staticBooks.length, page, limit, source: "static" });
    }

    return NextResponse.json({ data: items, total, page, limit, source: "database" });
  } catch {
    return NextResponse.json({ data: staticBooks, total: staticBooks.length, page: 1, limit: 10, source: "static" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const book = await prisma.book.create({
      data: {
        slug: body.slug,
        title: body.title,
        author: body.author,
        description: body.description,
        cover: body.cover,
        category: body.category,
        downloadUrl: body.downloadUrl,
        published: body.published ?? false,
      },
    });
    return NextResponse.json({ data: book }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erro ao criar livro" }, { status: 500 });
  }
}
