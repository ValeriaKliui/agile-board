import { PropsWithChildren } from "react";

import { Selected } from "./styled";

export const SelectedItem = ({ children }: PropsWithChildren) => {
  return <Selected>{children}</Selected>;
};
