export interface Option {
  value: string;
  label: string;
}

export const transformObjectToOptions = (obj: Record<string, string>): Option[] => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc.push({ value, label: key });
    return acc;
  }, [] as Option[]);
};
