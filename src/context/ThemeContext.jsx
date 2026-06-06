import React, { createContext, useContext } from 'react';

const ThemeContext = createContext({ theme: 'light' });

export const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={{ theme: 'light' }}>
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
