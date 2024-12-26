import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.PÓTGRES_HOST,
  port: process.env.POSTGRES_PORT || 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
}));
