import { DefaultTabInfo } from '@layout/auth/types';
import { EnumType, ErrorMessageProps, Option } from '@utils/types';

export const getTabInfo = (tabsInfo: DefaultTabInfo[], key: keyof DefaultTabInfo, value: string) =>
  tabsInfo.find((tabInfo) => tabInfo[key] === value) || tabsInfo[0];

export const getErrorMessage = <TErrors extends EnumType, TErrorMessages extends EnumType>({
  errors,
  errorsMessages,
  errorCode,
}: ErrorMessageProps<TErrors, TErrorMessages>): string | null => {
  const foundErrorEntry = Object.entries(errors).find(([, code]) => code === errorCode);

  if (!foundErrorEntry) return null;
  const errorKey = foundErrorEntry[0] as keyof TErrorMessages;

  return String(errorsMessages[errorKey]);
};

export const mergeUniqueArrays = <T>(arr1: T[], arr2: T[]): T[] => {
  return Array.from(new Set([...arr1, ...arr2]));
};

export const filterUndefinedValues = <T>(data: Record<string, T>): Record<string, T> => {
  return Object.fromEntries(Object.entries(data).filter(([_, value]) => value !== undefined));
};

export const transformObjectToOptions = (obj: Record<string, string>): Option[] => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc.push({ value, label: key });
    return acc;
  }, [] as Option[]);
};
