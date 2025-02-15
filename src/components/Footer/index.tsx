import { Footer as FooterAntd } from "antd/es/layout/layout";

export const Footer = () => {
  return (
    <FooterAntd>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </FooterAntd>
  );
};
