import { Selected } from "@components/SelectedItem/styled";
import { PropsWithChildren } from "react";

export const SelectedItem = ({ children }: PropsWithChildren) => {
  return <Selected>{children}</Selected>;
};
