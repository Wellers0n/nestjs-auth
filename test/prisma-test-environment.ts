import { exec } from 'node:child_process';
import dotenv from 'dotenv';
import { Client } from 'pg';
import util from 'node:util';
import crypto from 'node:crypto';
import { execSync } from 'child_process';


// console.log(process.env.DATABASE_USER)

// const DATABASE_TEST_URL = process.env.DATABASE_TEST_URL;

// const schema = `test_${crypto.randomUUID()}`;
// const connectionString = `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?schema=${schema}`;

beforeAll(async () => {
  // const execSync = util.promisify(exec);

  // const prismaBinary = '../node_modules/.bin/prisma';

  process.env.DATABASE_URL = process.env.DATABASE_TEST_URL;
  // global.process.env.DATABASE_URL = process.env.DATABASE_TEST_URL;

  // console.log({ DATABASE_TEST_URL: process.env.DATABASE_TEST_URL });

  execSync(
    `export DATABASE_URL=${process.env.DATABASE_TEST_URL} && npx prisma migrate deploy`,
    { stdio: 'inherit' },
  );

  // await execSync(`${prismaBinary} migrate deploy`);

  //   return super.setup();
});
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterAll(async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_TEST_URL,
  });


  // execSync(
  //   `export DATABASE_URL=${process.env.DATABASE_TEST_URL} && npx prisma migrate deploy`,
  //   { stdio: 'inherit' },
  // );

  await client.connect();
  await client.query(`DROP SCHEMA IF EXISTS "test" CASCADE`);
  await client.end();
});
