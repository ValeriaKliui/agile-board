import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#722ed1',
      },
    }}
  >
    {children}
  </ConfigProvider>
);
