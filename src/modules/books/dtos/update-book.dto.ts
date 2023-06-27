import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateBookBodyDTO {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;
}

export class UpdateBookParamDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class UpdateBookDataDTO {
  id: number;
  title: string;
  description: string;
}
