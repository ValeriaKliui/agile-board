export const groupArrayByValue = <T>(array: T[], key: keyof T): { [key: string]: T[] } => {
  return array.reduce(
    (acc, curr) => {
      const currKey = String(curr[key]);
      acc[currKey] = acc[currKey] ? [...acc[currKey], curr] : [curr];
      return acc;
    },
    {} as Record<string, T[]>,
  );
};
