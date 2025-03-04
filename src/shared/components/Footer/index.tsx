import { Layout } from 'antd';

const {Footer: FooterAntd} = Layout

export const Footer = () => {
  return <FooterAntd>{new Date().getFullYear()} Created by Lera Kliui</FooterAntd>;
};
