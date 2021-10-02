import { ThemeProvider } from 'styled-components';

import theme from '../themes/default';
import GlobalStyles from './globals';
import React from 'react';

type ThemeProps = {
  children: any
};

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
  );
};

export default Theme;