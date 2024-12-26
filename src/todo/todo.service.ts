import { HttpException, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}
  async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    const todoData = await this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todoData);
  }

  async findAll(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: number): Promise<TodoEntity> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new HttpException('Todo Not Found', 404);
    }
    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    const existingTodo = await this.findOne(id);
    const todo = this.todoRepository.merge(existingTodo, updateTodoDto);
    return await this.todoRepository.save(todo);
  }

  async remove(id: number): Promise<TodoEntity> {
    const existingTodo = await this.findOne(id);
    return await this.todoRepository.remove(existingTodo);
  }
}
