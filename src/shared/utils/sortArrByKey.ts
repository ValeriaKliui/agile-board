export const sortArrByKey = <T, K extends keyof T>(array: T[], key: K): T[] => {
  if (!array) return [];
  return [...array].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB;
    }

    if (valA instanceof Date && valB instanceof Date) {
      return valB.getTime() - valA.getTime();
    }

    if (typeof valA === 'string' && typeof valB === 'string') {
      return valA.localeCompare(valB);
    }

    return 0;
  });
};
