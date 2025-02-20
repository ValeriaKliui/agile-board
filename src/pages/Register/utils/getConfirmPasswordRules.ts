import { Rule } from 'antd/es/form';

export const getConfirmPasswordRules = (): Rule[] => [
  {
    required: true,
    message: 'Please confirm your password!',
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The new password that you entered do not match!'));
    },
  }),
];
