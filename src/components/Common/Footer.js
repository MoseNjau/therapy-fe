// src/components/Common/Footer.js
import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" py="4" textAlign="center" bg={useColorModeValue('gray.100', 'gray.800')}>
    <Text>&copy; {new Date().getFullYear()} TherapyApp. All rights reserved.</Text>
  </Box>
);

export default Footer;
