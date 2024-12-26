import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTodoDto {
  @ApiProperty({ description: 'Title Todo' })
  @IsNotEmpty()
  @IsString()
  title: string;
}
