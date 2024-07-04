// src/theme.js
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.50', 'gray.900')(props),
      },
    }),
  },
  colors: {
    brand: {
      500: '#38B2AC',
    },
  },
});

export default theme;
