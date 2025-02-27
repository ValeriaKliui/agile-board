import { ROLES } from '@constants';
import { BoardInfo } from '@store';

export type BoardCardProps = Omit<BoardInfo, 'members'> & { userRole: ROLES };
