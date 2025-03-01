import { Member, Task } from '@store';

export type TaskWithUser = Omit<Task, 'assignedTo' | 'author'> & {
  assignedTo?: Member;
  author?: Member;
};
