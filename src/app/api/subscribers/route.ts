import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name } = body;

      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const existing = await prisma.subscriber.findUnique({ where: { email } });
    if (existing) {
        await prisma.subscriber.update({ where: { email }, data: { active: true } });
        return NextResponse.json({ message: "Subscrição reativada com sucesso" });
      }
      return NextResponse.json({ message: "Email já registado" });
    }

    const subscriber = await prisma.subscriber.create({
      data: { email, name },
    });

    return NextResponse.json({ message: "Subscrito com sucesso", data: subscriber }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erro ao subscrever" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const total = await prisma.subscriber.count({ where: { active: true } });
    return NextResponse.json({ total });
  } catch {
    return NextResponse.json({ error: "Erro ao buscar subscribers" }, { status: 500 });
  }
}
