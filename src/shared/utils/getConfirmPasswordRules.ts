import { setRequiredRule } from '@shared/utils';
import { Rule } from 'antd/es/form';

export const getConfirmPasswordRules = (): Rule[] => [
  ...setRequiredRule('password confirmation'),
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The new password that you entered do not match!'));
    },
  }),
];
