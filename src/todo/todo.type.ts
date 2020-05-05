import { Field, ObjectType } from '@nestjs/graphql';
import { TodoPriority } from './todo-priority.enum';

@ObjectType('Todo')
export class TodoType {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    scheduledDate: string;

    @Field()
    labels: string[];

    @Field(type => TodoPriority, { defaultValue: TodoPriority.P4 })
    priority: TodoPriority;
}
