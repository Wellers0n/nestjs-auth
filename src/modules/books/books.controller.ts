import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { FindBookQueryDTO } from './dtos/find-book.dto';
import { BookEntity } from './entities/book.entity';
import { FindOneBookParamDTO } from './dtos/find-one-book.dto';
import { CreateBookBodyDTO } from './dtos/create-book.dto';

@UseGuards(AuthGuard)
@Controller('books')
@ApiTags('Books')
@ApiBearerAuth()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  // @ApiOkResponse({ type: UserOkResponse })
  // @ApiUnauthorizedResponse({ type: UserUnauthorizedResponse })
  findByEmail(@Query() query: FindBookQueryDTO): Promise<BookEntity[]> {
    const { title } = query;
    return this.booksService.find({ title });
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  // @ApiOkResponse({ type: UserOkResponse })
  // @ApiUnauthorizedResponse({ type: UserUnauthorizedResponse })
  findById(@Param() param: FindOneBookParamDTO): Promise<BookEntity> {
    const { id } = param;
    return this.booksService.findOne({ id: Number(id) });
  }

  @Post('create')
  @HttpCode(HttpStatus.OK)
  // @ApiOkResponse({ type: UserOkResponse })
  // @ApiUnauthorizedResponse({ type: UserUnauthorizedResponse })

  create(@Body() body: CreateBookBodyDTO): Promise<BookEntity> {
    const { title, description, user_id = null } = body;
    return this.booksService.create({ title, description, user_id });
  }
}
