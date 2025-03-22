import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pkg;

console.log( process.env.DB_USER)

console.log( process.env.DB_HOST)
console.log( process.env.DB_DATABASE)
console.log( process.env.DB_PASSWORD)
console.log( process.env.DB_PORT)

const pool = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});


pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

export default pool;
