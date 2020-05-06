import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsOptional, IsUUID, MinLength } from 'class-validator';
import { TodoPriority } from './todo-priority.enum';

@InputType()
export class TodoUpdateInput {
    @Field()
    @IsUUID('4')
    id: string;

    @Field({ nullable: true })
    @MinLength(1)
    @IsOptional()
    name: string;

    @Field({ nullable: true })
    @IsDateString()
    @IsOptional()
    scheduledDate: string;

    @Field(() => [String], { nullable: true })
    @IsOptional()
    labels: string[];

    @Field(type => TodoPriority, { nullable: true })
    @IsOptional()
    priority: TodoPriority;
}
