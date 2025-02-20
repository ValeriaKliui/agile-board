export const mergeUniqueArrays = <T>(arr1: T[], arr2: T[]): T[] => {
  return Array.from(new Set([...arr1, ...arr2]));
};
