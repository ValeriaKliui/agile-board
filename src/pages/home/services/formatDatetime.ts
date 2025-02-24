import { format as doFormat } from 'date-fns';
import { Timestamp } from 'firebase/firestore';

export const formatDatetime = ({
  timestamp,
  format = 'dd.MM.yyyy',
}: {
  timestamp: Timestamp;
  format?: string;
}) => {
  const jsDate = timestamp.toDate();

  return doFormat(jsDate, format);
};
