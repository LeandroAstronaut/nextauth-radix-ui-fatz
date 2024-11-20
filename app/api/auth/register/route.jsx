import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from 'bcryptjs';



export async function POST(request) {
  const data = await request.json();
  console.log(data);

  // Hashear una contraseña
  data.Clave = await bcrypt.hash(data.Clave, 10);



  const newUser = await prisma.usuarios.create({
    data,
  });

  //Quito para que no devuelva en el front
  const { Clave, ...user } = newUser;

  return NextResponse.json(user, {
    status: 201,
  });
}