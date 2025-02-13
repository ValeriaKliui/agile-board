import { ButtonProps as ButtonPropsAntd } from "antd";
import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren, ButtonPropsAntd {
  centered?: boolean;
}
