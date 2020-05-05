import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/todo.entity';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://localhost/todo',
            useUnifiedTopology: true,
            synchronize: true,
            entities: [Todo],
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        TodoModule,
    ],
})
export class AppModule {}
