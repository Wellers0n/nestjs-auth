import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginBodyDTO } from './dtos/login-body.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  LoginResponse200DTO,
  LoginResponse401DTO,
} from './dtos/login-response.dto';

@Controller('auth')
@ApiTags('Session')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({ type: LoginResponse200DTO })
  @ApiUnauthorizedResponse({ type: LoginResponse401DTO })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() body: LoginBodyDTO) {
    const { email, password } = body;
    return this.authService.signIn(email, password);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
