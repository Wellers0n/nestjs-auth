import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';

describe('Auth login (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    await request(app.getHttpServer()).post('/auth/register').send({
      name: 'admin',
      email: 'admin@admin.com',
      password: 'admin',
    });
  });

  it('/auth/login (POST)', async () => {

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'admin@admin.com',
        password: 'admin',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Login com sucesso');
    expect(response.body.access_token).toBeTruthy();
  });

  it('/auth/login (POST) Unauthorized', async () => {
    

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'admin@admin.com',
        password: 'ad',
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe('Unauthorized');
    expect(response.body.access_token).toBeFalsy();
  });
});
