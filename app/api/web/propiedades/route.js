import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Nueva función GET para listar las propiedades
export async function GET(request) {

  const propiedades = await prisma.propiedades.findMany();

  return NextResponse.json(propiedades, { status: 200 });
}

//import pool from '@/lib/db';

//listar propiedades
// export async function GET() {
//   try {
//     const client = await pool.connect();
//     const { rows } = await client.query('SELECT * FROM propiedades');
//     client.release(); 
    
//     return new Response(JSON.stringify(rows), {
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error fetching data:', error); 
//     return new Response('Error fetching data', { status: 500 });
//   }
// }

