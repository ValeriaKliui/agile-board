export interface ErrorMessageProps<
  TErrors extends EnumType,
  TErrorsMessages extends EnumType,
> {
  errors: TErrors;
  errorsMessages: TErrorsMessages;
  errorCode: string;
}

export type EnumType = Record<string, string | number>;
