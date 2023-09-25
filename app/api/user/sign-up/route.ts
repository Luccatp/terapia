import { prisma } from "@/lib/prisma";
import { signUpSchema } from "@/lib/validations/sign-up";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const input = signUpSchema.safeParse(await req.json());

    if (!input.success) {
      return NextResponse.json(
        {
          message: "Faltam informações para completar o seu cadastro",
          example: input.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const { data } = input;

    const userExists = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      return NextResponse.json(
        {
          message: "Esse email já está cadastrado, insira outro email",
          example: userExists,
        },
        { status: 400 }
      );
    }
    // todo: encrypt password

    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const newUser = await prisma.user.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        password: hashedPassword,
        birthday: data.birthday,
      },
    });

    const therapist = await prisma.therapist.create({
      data: {
        expertise: data.expertise,
        daysAvailable: data.daysAvailable,
        description: data.description,
        phoneNumber: data.phoneNumber,
        price: String(data.price),
        User: {
          connect: {
            id: newUser.id,
          },
        },
      },
    });

    const clinic = await prisma.clinic.findFirst({
      where: {
        number: data.number,
        zipCode: data.zipCode,
        floorNumber: data.floorNumber,
      },
      include: {
        Therapist: {
          where: {
            id: therapist.id,
          },
        },
      },
    });

    if (!clinic) {
      await prisma.clinic.create({
        data: {
          number: data.number,
          zipCode: data.zipCode,
          floorNumber: data.floorNumber,
          street: data.street,
          city: data.city,
          state: data.state,
          neighborhood: data.neighborhood,
          Therapist: {
            connect: {
              id: therapist.id,
            },
          },
        },
      });
    }

    if (data.education === "psychologist") {
      await prisma.psychologist.create({
        data: {
          CRP: data.registerNumber,
          Therapist: {
            connect: {
              id: therapist.id,
            },
          },
        },
      });
    }

    if (data.education === "psychiatrist") {
      await prisma.psychiatrist.create({
        data: {
          CRM: data.registerNumber,
          Therapist: {
            connect: {
              id: therapist.id,
            },
          },
        },
      });
    }
    return NextResponse.json(
      { message: "usuario criado com sucesso" },
      { status: 201 }
    );
  } catch (e: any) {
    if (e.code === "P2002") {
      return NextResponse.json(
        {
          message: "Esse email já está cadastrado, insira outro email",
          example: e,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Erro ao criar usuário, por favor tente novamente mais tarde",
        example: e,
      },
      { status: 500 }
    );
  }
}
