import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
@ApiTags('Users')
@ApiBearerAuth()
@ApiResponse({ type: UserEntity })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('create')
  @UseGuards(AuthGuard)
  create(@Body() body: CreateUserDTO): Promise<UserEntity> {
    const { name, email, password } = body;
    return this.usersService.create({ name, email, password });
  }
}
