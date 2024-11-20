import pool from '@/lib/db';

//listar inmobiliarias
export async function GET() {
  try {
    // Obtiene una conexión del pool y ejecuta la consulta
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM inmobiliarias');
    client.release(); // Libera la conexión de vuelta al pool
    
    return new Response(JSON.stringify(rows), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data:', error); 
    return new Response('Error fetching data', { status: 500 });
  }
}
