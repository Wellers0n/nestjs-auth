import { Module } from '@nestjs/common';

import { BooksModule } from './modules/books/books.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [BooksModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
