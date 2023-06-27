import { Controller, Get, HttpCode, HttpStatus, Query, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { FindBookQueryDTO } from './dtos/find-book.dto';
import { BookEntity } from './entities/book.entity';

@Controller('books')
@ApiTags('Books')
@ApiBearerAuth()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  // @ApiOkResponse({ type: UserOkResponse })
  // @ApiUnauthorizedResponse({ type: UserUnauthorizedResponse })
  @UseGuards(AuthGuard)
  findByEmail(@Query() query: FindBookQueryDTO): Promise<BookEntity[]> {
    const { title } = query;
    return this.booksService.find({ title });
  }
}
