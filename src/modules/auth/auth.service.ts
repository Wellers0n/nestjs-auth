import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email, password) {
    const user = await this.usersService.findByEmail({ email });

    if (!user) throw new UnauthorizedException();

    const correctPassword = bcrypt.compareSync(password, user.password);

    if (!correctPassword) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
      message: 'Login com sucesso',
    };
  }
}
