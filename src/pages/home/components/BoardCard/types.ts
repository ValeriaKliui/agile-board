import { BoardInfo } from '@store';

export type BoardCardProps = Omit<BoardInfo, 'members'> & { userRole?: string };
