import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { v4 as uuid } from 'uuid';
import { TodoPriority } from './todo-priority.enum';
import { CreateTodoInput } from './todo.input';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) {}
    async createTodo(todoInput: CreateTodoInput): Promise<Todo> {
        const { priority, labels, name, scheduledDate } = todoInput;
        const todo = await this.todoRepository.create({
            id: uuid(),
            name,
            scheduledDate,
            labels: labels.length > 0 ? labels : [],
            priority: priority !== null ? priority : TodoPriority.P4,
        });
        return this.todoRepository.save(todo);
    }
    async getOneTodo(id: string): Promise<Todo> {
        return this.todoRepository.findOne({ id });
    }
    async getAllTodos(): Promise<Todo[]> {
        return this.todoRepository.find();
    }
    async deleteTodo(id: string): Promise<Boolean> {
        const todo: Todo = await this.getOneTodo(id);
        if (!todo) {
            throw new NotFoundException(`Todo ID "${id}" not found`);
        }
        const result = await this.todoRepository.remove(todo);
        return true;
    }
}
