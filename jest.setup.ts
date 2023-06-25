import { Client } from 'pg';
import { execSync } from 'child_process';

beforeAll(async () => {
  process.env.DATABASE_URL = process.env.DATABASE_TEST_URL;
  global.process.env.DATABASE_URL = process.env.DATABASE_TEST_URL;

  execSync(
    `export DATABASE_URL=${process.env.DATABASE_TEST_URL} && npx prisma migrate deploy`,
    { stdio: 'inherit' },
  );
});

// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterAll(async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_TEST_URL,
  });

  await client.connect();
  await client.query(`DROP SCHEMA IF EXISTS "test" CASCADE`);
  await client.end();
});
