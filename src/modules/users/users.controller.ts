import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { AuthGuard } from '../auth/auth.guard';
import {
  UserOkResponse,
  UserUnauthorizedResponse,
} from './swagger/response.swagger';

@Controller('users')
@ApiTags('Users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserOkResponse })
  @ApiUnauthorizedResponse({ type: UserUnauthorizedResponse })
  @UseGuards(AuthGuard)
  create(@Body() body: CreateUserDTO): Promise<UserEntity> {
    const { name, email, password } = body;
    return this.usersService.create({ name, email, password });
  }
}
