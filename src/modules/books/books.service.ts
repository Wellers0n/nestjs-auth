import { Injectable } from '@nestjs/common';
import { CreateBookDataDTO } from './dtos/create-book.dto';
import { FindOneBookDataDTO } from './dtos/find-one-book.dto';
import { BookRepository } from './book.repository';
import { UpdateBookDataDTO } from './dtos/update-book.dto';
import { FindBookDataDTO } from './dtos/find-book.dto';
import { DeleteBookDataDTO } from './dtos/delete-book.dto';

@Injectable()
export class BooksService {
  constructor(private bookRepository: BookRepository) {}

  async create(data: CreateBookDataDTO) {
    const { title, description, user_id } = data;
    return this.bookRepository.create(title, description, user_id);
  }
  async findOne(data: FindOneBookDataDTO) {
    const { id } = data;
    return this.bookRepository.findOne(id);
  }

  async find(data: FindBookDataDTO) {
    const { title } = data;
    return this.bookRepository.find(title);
  }

  async update(data: UpdateBookDataDTO) {
    const { title, id, description } = data;
    return this.bookRepository.update(id, title, description);
  }

  async delete(data: DeleteBookDataDTO) {
    const { id } = data;
    this.bookRepository.delete(id);
  }
}
