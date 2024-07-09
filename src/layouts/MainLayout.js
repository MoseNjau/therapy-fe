// src/layouts/MainLayout.js
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Common/Sidebar';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => (
  <Flex>
    <Sidebar />
    <Box flex="1" ml={{ base: 0, md: 60 }} p="4">
      <Navbar />
      <Box as="main" p="4">
        <Outlet/>
      </Box>
      <Footer />  	  
    </Box>
  </Flex>
);

export default MainLayout;
