// app/api/usuarios/route.js
import pool from '@/lib/db';

export async function GET() {
  try {
    // Obtiene una conexión del pool y ejecuta la consulta
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM usuarios');
    client.release(); // Libera la conexión de vuelta al pool
    
    // Devuelve la respuesta en formato JSON
    return new Response(JSON.stringify(rows), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data:', error); // Agrega un log para depuración
    return new Response('Error fetching data', { status: 500 });
  }
}
