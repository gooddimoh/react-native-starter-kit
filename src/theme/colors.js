import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: '#ffffff',
    black: '#000000',
    primary: '#486c86',
    secondary: '#8dd9d5',
    grey: '#9d9fa3',
    success: '#38C2B7',
    error: '#E14161',
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    white: '#000000',
    black: '#ffffff',
    primary: '#BB86FC',
    secondary: '#03DAC5',
    grey: '#9d9fa3',
    success: '#38C2B7',
    error: '#E14161',
  },
};
