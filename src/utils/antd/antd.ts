import { Rule } from "antd/es/form";

export const getEmailRules = (): Rule[] => [
  {
    type: "email",
    message: "The input is not valid E-mail!",
  },
  {
    required: true,
    message: "Please input your E-mail!",
  },
];

export const getPasswordRules = (): Rule[] => {
  return [
    {
      required: true,
      message: "Please input your password!",
    },
    { min: 6, message: "Password must be 6 symbols or more" },
  ];
};

export const getConfirmPasswordRules = (): Rule[] => [
  {
    required: true,
    message: "Please confirm your password!",
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error("The new password that you entered do not match!"),
      );
    },
  }),
];
