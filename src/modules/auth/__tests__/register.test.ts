import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/register (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        name: 'mourinho',
        email: 'mourinho@admin.com',
        password: 'admin',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Registrado com sucesso');
    expect(response.body.access_token).toBeTruthy();
  });
});
