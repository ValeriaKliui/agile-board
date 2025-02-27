import { BoardInfo } from 'store/board';

export type BoardColumnProps = Pick<BoardInfo, 'boardID'>;

export type AddColumnsProps = Pick<BoardInfo, 'boardID'> & {
  columns: Column[];
};

export interface Column {
  columnID: string;
  order: number;
  title: string;
}
