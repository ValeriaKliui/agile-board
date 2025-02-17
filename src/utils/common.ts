import { DefaultTabInfo } from '@layout/auth/interfaces';
import { EnumType, ErrorMessageProps } from '@utils/interfaces';

export const getTabInfo = (tabsInfo: DefaultTabInfo[], key: keyof DefaultTabInfo, value: string) =>
  tabsInfo.find((tabInfo) => tabInfo[key] === value) || tabsInfo[0];

export const getErrorMessage = <TErrors extends EnumType, TErrorMessages extends EnumType>({
  errors,
  errorsMessages,
  errorCode,
}: ErrorMessageProps<TErrors, TErrorMessages>): string | undefined => {
  const foundErrorEntry = Object.entries(errors).find(([, code]) => code === errorCode);

  if (!foundErrorEntry) return undefined;
  const errorKey = foundErrorEntry[0] as keyof TErrorMessages;

  return String(errorsMessages[errorKey]);
};

export const getUserProperties = (
  filledProperties: string[],
  allProperties: string[],
): string[] => {
  return Array.from(new Set([...allProperties, ...filledProperties]));
};

export const filterUndefinedValues = <T>(data: Record<string, T>): Record<string, T> => {
  return Object.fromEntries(Object.entries(data).filter(([_, value]) => value !== undefined));
};

export const groupObjectByKeys = (object: Record<string, string>) =>
  Object.entries(object).reduce<{ [key: string]: string[] }>((acc, [key, value]) => {
    acc[value] = acc[value] ? [...acc[value], key] : [key];

    return acc;
  }, {});
