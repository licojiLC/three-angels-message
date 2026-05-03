import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getStudies } from "@/content/studies/index";

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
      prisma.study.findMany({ where, orderBy: { createdAt: "desc" }, skip, take: limit }),
      prisma.study.count({ where }),
    ]);

    if (items.length === 0) {
      const staticStudies = getStudies().slice(skip, skip + limit);
      return NextResponse.json({ data: staticStudies, total: staticStudies.length, page, limit, source: "static" });
    }

    return NextResponse.json({ data: items, total, page, limit, source: "database" });
  } catch {
    const staticStudies = getStudies();
    return NextResponse.json({ data: staticStudies, total: staticStudies.length, page: 1, limit: 10, source: "static" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const study = await prisma.study.create({
      data: {
        slug: body.slug,
        title: body.title,
        description: body.description,
        content: body.content,
        category: body.category,
        image: body.image,
        published: body.published ?? false,
      },
    });
    return NextResponse.json({ data: study }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erro ao criar estudo" }, { status: 500 });
  }
}
