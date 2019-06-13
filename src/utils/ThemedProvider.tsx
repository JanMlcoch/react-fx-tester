import React from 'react';

export type Theme = {
  foreground: string;
  background: string;
}

export const themes: {[key: string]: Theme} = {
  light: {
    foreground: 'blue',
    background: 'blue',
  },
  dark: {
    foreground: 'yellow',
    background: 'yellow',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
