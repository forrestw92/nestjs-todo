import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { TodoType } from './todo.type';
import { TodoPriority } from './todo-priority.enum';
import { CreateTodoInput } from './todo.input';

@Resolver('Todo')
export class TodoResolver {
    constructor(private todoService: TodoService) {}

    @Mutation(returns => TodoType)
    createTodo(@Args('todoInput') todoInput: CreateTodoInput) {
        return this.todoService.createTodo(todoInput);
    }

    @Query(returns => TodoType)
    todos() {
        return this.todoService.getAllTodos();
    }

    @Query(returns => TodoType)
    todo(@Args('id') id: string) {
        return this.todoService.getOneTodo(id);
    }
}
