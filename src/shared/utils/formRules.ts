import { MIN_PASSWORD_LENGTH } from '@constants';
import { Rule } from 'antd/es/form';

export const getEmailRules = (): Rule[] => [
  {
    type: 'email',
    message: 'The input is not valid E-mail!',
  },
  {
    required: true,
    message: 'Please input your E-mail!',
  },
];

export const getPasswordRules = (): Rule[] => {
  return [
    {
      required: true,
      message: 'Please, input your password!',
    },
    {
      min: MIN_PASSWORD_LENGTH,
      message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`,
      validateTrigger: 'blur',
    },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      message: 'Password must contain at least 1 lowercase and uppercase letter, 1 digit',
    },
    {
      pattern: /^\S*$/,
      message: 'Password must not contain spaces',
    },
  ];
};
