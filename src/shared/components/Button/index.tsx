import { ButtonStyled } from './styled';
import { ButtonProps } from './types';

export const Button = ({ children, centered, cursor, ...buttonProps }: ButtonProps) => {
  return (
    <ButtonStyled $centered={centered} $cursor={cursor} {...buttonProps}>
      {children}
    </ButtonStyled>
  );
};
