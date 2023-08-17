import { prisma } from "@/lib/prisma";
import { createUserSchema } from "@/lib/validations/user";
import { NextResponse } from "next/server";

export default async function POST(req: Request) {
  const input = createUserSchema.parse(await req.json());

  console.log({ input });

  const user = await prisma.user.findFirst({
    where: {
      email: input.email,
    },
  });

  if (user) {
    new NextResponse("usuario ja existe", {
      status: 400,
    });
  }

  await prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
      password: input.password,
      age: input.age,
      registerNumber: input.registerNumber,
      fieldOfStudy: input.fieldOfStudy,
      description: input.description,
      verified: input.verified,
      image: input.image,
      price: input.price,
    },
  });
  new NextResponse("usuário criado", {
    status: 200,
  });
}
