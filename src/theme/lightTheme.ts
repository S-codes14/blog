import { transitions, fontSize } from './common';

const lightTheme = {
  colors: {
    primary: '#3982e4', // Color for buttons or links
    bg: '#828487', // Background color
    white: '#fff',
    black: '#000',
    grey: {
      dark: 'rgba(0, 0, 0, 0.9)',
      default: 'rgba(0, 0, 0, 0.7)',
      light: 'rgba(0, 0, 0, 0.5)',
      ultraLight: 'rgba(0, 0, 0, 0.15)',
    },
  },
  transitions,
  fontSize,
};

export { lightTheme };
