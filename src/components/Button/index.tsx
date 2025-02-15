import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button = ({
  children,
  centered,
  cursor,
  ...buttonProps
}: ButtonProps) => {
  return (
    <ButtonStyled $centered={centered} $cursor={cursor} {...buttonProps}>
      {children}
    </ButtonStyled>
  );
};
