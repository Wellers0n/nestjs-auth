import { ApiProperty } from '@nestjs/swagger';

export class LoginResponse200DTO {
  @ApiProperty()
  message: string;

  @ApiProperty()
  access_token: string;
}

export class LoginResponse401DTO {
  @ApiProperty()
  message: string;

  @ApiProperty()
  status_code: number;
}
