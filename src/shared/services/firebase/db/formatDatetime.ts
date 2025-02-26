import { format as doFormat } from 'date-fns';

import { DateTimeParams } from './types';

export const formatDatetime = ({ timestamp, format = 'dd.MM.yyyy' }: DateTimeParams) => {
  if (!timestamp) return '';
  const jsDate = timestamp.toDate();

  return doFormat(jsDate, format);
};
