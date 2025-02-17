import {neon} from '@neondatabase/serverless';
import {drizzle} from 'drizzle-orm/neon-http';
const sql = neon(Deno.env.get('DATABASE_URL')!);
const db = drizzle({client: sql});
