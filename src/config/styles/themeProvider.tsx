import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#722ed1',
        fontSize: 16,
        colorBorderSecondary: 'rgba(206, 206, 206, 0.8)'
      },
    }}
  >
    {children}
  </ConfigProvider>
);
