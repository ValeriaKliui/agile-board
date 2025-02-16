import { DefaultTabInfo } from "@layout/auth/interfaces";
import { EnumType, ErrorMessageProps } from "@utils/types";

export const getTabInfo = (
  tabsInfo: DefaultTabInfo[],
  key: keyof DefaultTabInfo,
  value: string,
) => tabsInfo.find((tabInfo) => tabInfo[key] === value) || tabsInfo[0];

export const getErrorMessage = <
  TErrors extends EnumType,
  TErrorMessages extends EnumType,
>({
  errors,
  errorsMessages,
  errorCode,
}: ErrorMessageProps<TErrors, TErrorMessages>): string | undefined => {
  const foundErrorEntry = Object.entries(errors).find(
    ([, code]) => code === errorCode,
  );

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

export const filterUndefinedValues = <T>(
  data: Record<string, T>,
): Record<string, T> => {
  return Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== undefined),
  );
};
