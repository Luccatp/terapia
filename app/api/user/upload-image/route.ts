import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const input = await req.json();
    const { data } = input;
    const user = await prisma.user.update({
      where: {
        email: data.email,
      },
      data: {
        image: data.image,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "Erro ao atualizar imagem, usuario nao existe",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Imagem atualizada com sucesso",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Erro ao atualizar imagem",
        example: err,
      },
      { status: 400 }
    );
  }
}
