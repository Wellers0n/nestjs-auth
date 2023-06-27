import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from '@/database/prismaServices';
import { BookRepository } from './book.repository';

@Module({
  controllers: [BooksController],
  providers: [BooksService, PrismaService, BookRepository],
  exports: [BooksService],
})
export class BooksModule {}
