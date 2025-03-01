export function updateDataWithID<T>(
  array: T[],
  key: keyof T,
  targetID: string,
  newData: Partial<T>,
): T[] {
  return array.map((item) => (item[key] === targetID ? { ...item, ...newData } : item));
}
