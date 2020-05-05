import { Field, InputType } from '@nestjs/graphql';
import { TodoPriority } from './todo-priority.enum';

@InputType()
export class CreateTodoInput {
    @Field()
    name: string;

    @Field()
    scheduledDate: string;

    @Field(() => [String], { defaultValue: [], nullable: true })
    labels: string[];

    @Field(type => TodoPriority, { nullable: true })
    priority: TodoPriority;
}
