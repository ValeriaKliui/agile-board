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
