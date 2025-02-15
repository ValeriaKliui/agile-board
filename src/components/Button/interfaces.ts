import { ButtonProps as ButtonPropsAntd } from "antd";
import { Properties } from "csstype";
import { PropsWithChildren } from "react";

type StyledProps<T> = {
  [K in keyof T as K extends string | number ? `$${K}` : never]: T[K];
};

export interface ButtonStyleProps {
  centered?: boolean;
  cursor?: Properties["cursor"];
}

export interface ButtonProps
  extends PropsWithChildren,
    ButtonPropsAntd,
    ButtonStyleProps {}

export type ButtonStyledProps = StyledProps<ButtonStyleProps>;
