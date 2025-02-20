export const filterUndefinedValues = <T>(data: Record<string, T>): Record<string, T> => {
  return Object.fromEntries(Object.entries(data).filter(([_, value]) => value !== undefined));
};
