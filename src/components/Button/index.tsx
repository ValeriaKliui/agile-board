import { Button as ButtonAntd, ButtonProps } from "antd";

export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <ButtonAntd {...buttonProps}>{children}</ButtonAntd>;
};
