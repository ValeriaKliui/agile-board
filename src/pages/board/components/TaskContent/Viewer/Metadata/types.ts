import { TaskWithUser } from '@pages/board/components';

export type TaskMetadataProps = Pick<TaskWithUser, 'title' | 'description' | 'priority'>;
