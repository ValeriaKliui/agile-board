export const sortArrByKey = <T, K extends keyof T>(array: T[], key: K): T[] => {
  return [...array].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB;
    }

    if (typeof valA === 'string' && typeof valB === 'string') {
      return valA.localeCompare(valB);
    }

    return 0;
  });
};
