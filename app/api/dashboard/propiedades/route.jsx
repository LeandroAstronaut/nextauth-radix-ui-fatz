import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const tipo = searchParams.get('tipo'); // Obtener el valor del parámetro 'tipo'

  let propiedades;

  console.log("Tipo recibido:", tipo);

  if (tipo === "mis-propiedades") {
    propiedades = await prisma.propiedades.findMany({
      where: {
        InmobiliariaId: parseInt(session.user.inmobiliariaid),
        Activo: 1,
      },
    });
    console.log("Propiedades (mis-propiedades):", propiedades);
  }

  if (tipo === "propiedades-grupo") {
    // Paso 1: Obtener los GrupoIds de la tabla grupoinmobiliarias
    const grupoIds = await prisma.grupoinmobiliarias.findMany({
      where: {
        InmobiliariaId: parseInt(session.user.inmobiliariaid),
        Activo: 1,
      },
      select: {
        GrupoId: true,
      },
    });

    const grupoIdArray = grupoIds.map((grupo) => grupo.GrupoId); // Extraer solo los GrupoIds
    console.log("GrupoIds:", grupoIdArray);

    // Paso 2: Obtener los PropiedadIds de la tabla grupopropiedades para esos GrupoIds
    const propiedadIds = await prisma.grupopropiedades.findMany({
      where: {
        GrupoId: {
          in: grupoIdArray, // Filtrar por los GrupoIds obtenidos
        },
      },
      select: {
        PropiedadId: true,
      },
    });

    const propiedadIdArray = propiedadIds.map((propiedad) => propiedad.PropiedadId); // Extraer solo los PropiedadIds
    console.log("PropiedadIds:", propiedadIdArray);

    // Paso 3: Obtener las Propiedades de la tabla propiedades usando los PropiedadIds
    propiedades = await prisma.propiedades.findMany({
      where: {
        Id: {
          in: propiedadIdArray, // Filtrar por los PropiedadIds obtenidos
        },
        Activo: 1,
      },
    });
    console.log("Propiedades (propiedades-grupo):", propiedades);
  }

  if (tipo !== "mis-propiedades" && tipo !== "propiedades-grupo") {
    propiedades = await prisma.propiedades.findMany();
    console.log("Propiedades (default):", propiedades);
  }

  return NextResponse.json(propiedades, { status: 200 });
}









export async function POST(request) {

  const data = await request.json();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const nuevaPropiedad = await prisma.propiedades.create({
    data: {
        Titulo: data.titulo,
        Descripcion: data.descripcion,
        InmobiliariaId: parseInt(session.user.inmobiliariaid)
    },
  });

  return NextResponse.json(nuevaPropiedad, { status: 201 });

}