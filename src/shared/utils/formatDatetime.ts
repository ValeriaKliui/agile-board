import { format as doFormat } from 'date-fns';

export const formatDatetime = (date?: Date, format = 'dd.MM.yyyy, HH:mm') => {
  if (!date) return '';

  const formattedTime = doFormat(date, 'HH:mm');

  if (formattedTime === '00:00') {
    return doFormat(date, 'dd.MM.yyyy');
  }

  return doFormat(date, format);
};
