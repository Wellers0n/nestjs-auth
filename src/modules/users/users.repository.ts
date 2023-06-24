import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaServices';
import * as bcrypt from 'bcryptjs';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    name: string,
    email: string,
    password: string,
  ): Promise<UserEntity> {
    const passwordBcrypt = bcrypt.hashSync(password, 8);
    return this.prisma.user.create({
      data: {
        name,
        email,
        password: passwordBcrypt,
      },
    });
  }
  async findByEmail(email: string): Promise<UserEntity> {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
  async findOne(id: number): Promise<UserEntity> {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }
}
