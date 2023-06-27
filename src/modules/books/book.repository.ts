import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/database/prismaServices';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BookRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    title: string,
    description: string,
    user_id?: number,
  ): Promise<BookEntity> {
    const userExist = await this.prisma.user.findFirst({
      where: {
        id: user_id,
      },
    });

    if (!userExist) throw new NotFoundException('User does not exist!');

    return this.prisma.book.create({
      data: {
        title,
        description,
        user_id,
      },
    });
  }

  async find(title: string): Promise<BookEntity[]> {
    return this.prisma.book.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
  }
  async findOne(id: number): Promise<BookEntity> {
    return this.prisma.book.findFirst({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.book.delete({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    title: string,
    description: string,
  ): Promise<BookEntity> {
    return this.prisma.book.update({
      data: {
        title,
        description,
      },
      where: {
        id,
      },
    });
  }
}
