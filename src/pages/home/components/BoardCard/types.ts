import { ROLES } from '@shared/constants';
import { BoardInfo } from '@store';

export type BoardCardProps = Omit<BoardInfo, 'members'> & { userRole: ROLES };
