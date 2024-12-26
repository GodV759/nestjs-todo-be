import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    try {
      await this.todoService.create(createTodoDto);
      return {
        success: true,
        message: 'Todo Created Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.todoService.findAll();
      return {
        success: true,
        data,
        message: 'Todos Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.todoService.findOne(+id);
      return {
        success: true,
        data,
        message: 'Todo Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    try {
      await this.todoService.update(+id, updateTodoDto);
      return {
        success: true,
        message: 'Todo Update Successfully',
      };
    } catch (error) {}
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.todoService.remove(+id);
      return {
        success: true,
        message: 'Todo Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
