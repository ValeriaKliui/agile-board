import { BoardInfo } from '@store/boards/types';

export type BoardCardProps = Omit<BoardInfo, 'members'>;
