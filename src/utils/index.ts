import { DefaultTabInfo } from '@layout/auth/interfaces';
import { EnumType, ErrorMessageProps } from '@utils/types';

export const getTabInfo = (
  tabsInfo: DefaultTabInfo[],
  key: keyof DefaultTabInfo,
  value: string
) =>
  tabsInfo.find((tabInfo) => tabInfo[key] === value) || tabsInfo[0];

export const getErrorMessage = <
  TErrors extends EnumType,
  TErrorsMessages extends EnumType,
>({
  errors,
  errorsMessages,
  errorCode,
}: ErrorMessageProps<TErrors, TErrorsMessages>) => {
  const foundError =
    Object.entries(errors).find((error) => error[1] === errorCode) ||
    [];

  const foundErrorCode = foundError[0] as keyof TErrorsMessages;

  const errorMessage = errorsMessages[foundErrorCode];
  return errorMessage;
};

export const getUserProperties = (
  fulfilledProperties: string[],
  allProperties: string[]
) => {
  const summedProperties = allProperties.concat(fulfilledProperties);
  const uniqueProperties = new Set(summedProperties);

  return Array.from(uniqueProperties);
};
