import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { FindOneUserDTO } from './dtos/find-one-user.dto';
import { FindByEmailDTO } from './dtos/find-by-email.dto copy';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(data: CreateUserDTO) {
    const { name, email, password } = data;
    return this.userRepository.create(name, email, password);
  }
  async findOne(data: FindOneUserDTO) {
    const { id } = data;
    return this.userRepository.findOne(id);
  }

  async findByEmail(data: FindByEmailDTO) {
    const { email } = data;
    return this.userRepository.findByEmail(email);
  }
}
