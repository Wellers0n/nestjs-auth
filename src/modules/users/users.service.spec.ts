import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from 'src/database/prismaServices';
import { CreateRepository } from './repositories/create.repository';
import { FindOneRepository } from './repositories/find-one.repository';
import { FindByEmailRepository } from './repositories/find-by-email.repository';

describe('BooksService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersService,
        CreateRepository,
        FindOneRepository,
        FindByEmailRepository,
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
