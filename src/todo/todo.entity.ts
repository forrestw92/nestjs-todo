import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { TodoPriority } from './todo-priority.enum';

@Entity()
export class Todo {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    scheduledDate: string;

    @Column()
    labels: string[];

    @Column({ default: TodoPriority.P4 })
    priority: TodoPriority;
}
