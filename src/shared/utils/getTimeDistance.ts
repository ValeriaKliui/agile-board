import { formatDistanceToNow } from 'date-fns';

export const getTimeDistance = (date: Date) => formatDistanceToNow(date);
