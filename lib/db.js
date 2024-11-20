// lib/db.js
import { createPool } from '@vercel/postgres';

// Verifica que la variable de entorno esté disponible
if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL is not defined');
}

// Crea un pool de conexiones en lugar de un cliente único
const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

export default pool;
