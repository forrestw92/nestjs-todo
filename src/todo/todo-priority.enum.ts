import { registerEnumType } from '@nestjs/graphql';

export enum TodoPriority {
    P1 = 1,
    P2,
    P3,
    P4,
}
registerEnumType(TodoPriority, {
    name: 'TodoPriority',
});
