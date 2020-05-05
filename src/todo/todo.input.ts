import { Field, InputType } from '@nestjs/graphql';
import { TodoPriority } from './todo-priority.enum';
import { IsArray, IsDateString, IsIn, MinLength } from 'class-validator';

@InputType()
export class CreateTodoInput {
    @Field()
    @MinLength(1)
    name: string;

    @Field()
    @IsDateString()
    scheduledDate: string;

    @Field(() => [String], { defaultValue: [], nullable: true })
    labels: string[];

    @Field(type => TodoPriority, { nullable: true })
    priority: TodoPriority;
}
