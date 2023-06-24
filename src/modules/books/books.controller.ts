import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('books')
@ApiTags('Books')
@ApiBearerAuth()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  get(): string {
    return 'hello world';
  }
}
