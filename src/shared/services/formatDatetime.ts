import { format as doFormat } from 'date-fns';
import { Timestamp } from 'firebase/firestore';

import { DateTimeParams } from './types';

export const formatDatetime = ({ timestamp, format = 'dd.MM.yyyy' }: DateTimeParams) => {
  if (!timestamp) return '';

  let tmstp = timestamp;
  if (tmstp instanceof Date) {
    tmstp = Timestamp.fromDate(tmstp);
  }

  const jsDate = tmstp.toDate();
  return doFormat(jsDate, format);
};
