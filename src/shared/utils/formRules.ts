import { MIN_PASSWORD_LENGTH } from '@shared/constants/ui';
import { Rule } from 'antd/es/form';

export const setRequiredRule = (fieldName: string) => {
  return [
    {
      required: true,
      message: `Please, input ${fieldName}.`,
    },
  ];
};

export const getEmailRules = (): Rule[] => [
  {
    type: 'email',
    message: 'The input is not valid E-mail!',
  },
  ...setRequiredRule('email'),
];

export const validatePassword = (_: unknown, value: string) => {
  if (!value) {
    return Promise.reject('Please, input your password');
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    return Promise.reject(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long`);
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  if (!passwordRegex.test(value)) {
    return Promise.reject(
      'Password must contain at least 1 lowercase and uppercase letter, 1 digit',
    );
  }

  return Promise.resolve();
};
