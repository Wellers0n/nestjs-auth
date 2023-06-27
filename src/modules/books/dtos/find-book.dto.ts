import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class FindBookQueryDTO {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  deescription: string;
}

export class FindBookDataDTO {
  title: string;
  description: string;
}
