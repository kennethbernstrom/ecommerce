import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debug log
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });