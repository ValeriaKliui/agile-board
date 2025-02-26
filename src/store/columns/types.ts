import { WithId } from '@shared/types';

export type BoardColumnProps = { boardID: string };

export type AddColumnsProps = BoardColumnProps & {
  columns: Column[];
};

export interface Column extends WithId {
  order: number;
  title: string;
}
