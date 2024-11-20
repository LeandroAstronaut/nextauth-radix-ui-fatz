import pool from '@/lib/db';

//ver una novedad
export async function GET(request, { params }) {
  const { id } = params;
  try {
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM novedades WHERE "Id" = $1', [id]);
    client.release();
    
    if (rows.length === 0) {
      return new Response('Novedad not found', { status: 404 });
    }
    
    return new Response(JSON.stringify(rows[0]), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching novedad:', error);
    return new Response('Error fetching data', { status: 500 });
  }
}


// Actualizar una novedad
export async function PUT(request, { params }) {
    const { id } = params;
    const { TituloNovedad, SubtituloNovedad, TextoNovedad } = await request.json();
  
    try {
      const client = await pool.connect();
      
      const { rowCount } = await client.query(
        'UPDATE novedades SET "TituloNovedad" = $1, "SubtituloNovedad" = $2, "TextoNovedad" = $3 WHERE "Id" = $4',
        [TituloNovedad, SubtituloNovedad, TextoNovedad, id]
      );
      
      client.release();
      
      if (rowCount === 0) {
        return new Response('Novedad no encontrada', { status: 404 });
      }
      
      return new Response('Novedad modificada con éxito', { status: 200 });
    } catch (error) {
      console.error('Error updating novedad:', error);
      return new Response('Error updating data', { status: 500 });
    }
  }