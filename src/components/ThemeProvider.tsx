"use client"
import React, { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    // Primary color (Spotify Green)
    colorPrimary: '#ffffff',

    // Base background color (Spotify Black)
    colorBgBase: '#191414',

    // Link color
    colorLink: '#ffffff',

    // Font color (text color set to white)
    colorText: '#ffffff',

    // Font size
    fontSize: 14,

    // Button size
    sizeStep: 4,

    // Border radius
    borderRadius: 4,
  },
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider theme={theme} >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
