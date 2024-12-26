import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsEnum } from 'class-validator';
import { STATUS } from '../constant';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty({ description: 'Status Todo' })
  @IsEnum(STATUS, { message: 'Status must be either 0, 1 or 2' })
  status: STATUS;
}
