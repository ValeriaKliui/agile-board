import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button = ({ children, centered, ...buttonProps }: ButtonProps) => {
  return (
    <ButtonStyled $centered={centered} {...buttonProps}>
      {children}
    </ButtonStyled>
  );
};
